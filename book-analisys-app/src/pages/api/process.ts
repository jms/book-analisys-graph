import type {NextApiRequest, NextApiResponse} from 'next';
import {z} from 'zod';
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

async function downloadBook(bookId: number): Promise<string | null> {
    const url = `https://www.gutenberg.org/files/${bookId}/${bookId}-0.txt`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            if (response.status === 404) {
                console.error(`Book ${bookId} not found on Project Gutenberg.`);
                return null;
            }
            throw new Error(`Failed to download book ${bookId}: ${response.status} ${response.statusText}`);
        }

        const text = await response.text();
        const startOfText = text.indexOf('*** START OF THE PROJECT GUTENBERG EBOOK');
        const endOfText = text.indexOf('*** END OF THE PROJECT GUTENBERG EBOOK');

        const cleanedText =
            startOfText !== -1 && endOfText !== -1
                ? text
                    .substring(startOfText + '*** START OF THE PROJECT GUTENBERG EBOOK'.length, endOfText)
                    .trim()
                : text.trim();

        return cleanedText;
    } catch (error) {
        console.error('Error downloading book:', error);
        return null;
    }
}

async function cacheBookText(bookId: number, bookText: string): Promise<void> {
    try {
        await prisma.bookText.upsert({
            where: {
                bookId: bookId,
            },
            update: {
                text: bookText,
            },
            create: {
                bookId: bookId,
                text: bookText,
            },
        });
    } catch (error) {
        console.error('Database error:', error);
    }
}

async function getCachedBookText(bookId: number): Promise<string | null> {
    try {
        const result = await prisma.bookText.findUnique({
            where: {
                bookId: bookId,
            },
            select: {
                text: true,
            },
        });
        return result?.text || null;
    } catch (error) {
        console.error('Database error:', error);
        return null;
    }
}

const processBookSchema = z.object({
    bookId: z.coerce.number().int().positive()
});


// API route handler
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).end();
    }
    try {
        const {bookId} = processBookSchema.parse(req.body);

        let bookText = await getCachedBookText(bookId);

        if (!bookText) {
            bookText = await downloadBook(bookId);

            if (bookText) {
                await cacheBookText(bookId, bookText);
            } else {
                return res.status(500).json({error: 'Failed to download book.'});
            }
        }
    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({error: 'Invalid input', details: error.errors});
        }
        console.error('Error processing book:', error);
        res.status(500).json({error: 'Internal server error.'});
    } finally {
        await prisma.$disconnect();
    }
}