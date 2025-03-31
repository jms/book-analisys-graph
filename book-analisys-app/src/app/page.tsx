'use client'

import React, { useState, useCallback } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion } from 'framer-motion';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, BookOpen, CheckCircle, Loader2, XCircle } from "lucide-react"
import { cn } from "@/lib/utils"


// Define the form schema using Zod
const formSchema = z.object({
  bookId: z.coerce.number().int().positive().describe("Book ID"),
});

// --- Components ---

/**
 * Form component for inputting the Project Gutenberg Book ID.
 */
const BookIdInputForm = ({ onSubmit }: { onSubmit: (data: z.infer<typeof formSchema>) => Promise<void> }) => {
  const [localBookId, setLocalBookId] = useState<string>(''); // Added local state
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bookId: undefined, // Initialize as undefined to ensure the field is touched
    },
  });

  // Function to handle form submission
  async function handleFormSubmit(values: z.infer<typeof formSchema>) {
    onSubmit(values);
  }

  return (
      <Form {...form}>
        <form
            onSubmit={form.handleSubmit(handleFormSubmit)}
            className="w-full max-w-md space-y-6"
        >
          <FormField
              control={form.control}
              name="bookId"
              render={({ field }) => (
                  <FormItem>
                    <FormLabel>Book ID</FormLabel>
                    <FormControl>
                      <Input
                          placeholder="Enter the Project Gutenberg Book ID"
                          value={localBookId} // Use local state
                          onChange={(e) => {
                            const value = e.target.value;
                            if (/^\d*$/.test(value)) {
                              setLocalBookId(value);
                              field.onChange(Number(value)); // Update form value
                            }

                          }}
                          type="number"
                          min="1" // Add min attribute
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
              )}
          />
          <Button
              type="submit"
              className="w-full"
          >
            Summarize
          </Button>
        </form>
      </Form>
  );
};

/**
 * Displays the summary result.
 */
const SummaryResult = ({ summary }: { summary: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mt-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md w-full max-w-2xl border border-gray-200 dark:border-gray-700"
    >
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
        <BookOpen className="mr-2 h-6 w-6 text-blue-500" />
        Summary:
      </h2>
      <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap leading-relaxed">
        {summary}
      </p>
    </motion.div>
);

/**
 * Displays an error message.
 */
const ErrorPage = ({ message }: { message: string }) => (
    <Alert variant="destructive" className="mt-8 w-full max-w-2xl">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
);

const NotFoundPage = () => (
    <div className="flex items-center justify-center h-full">
      <Alert className="w-full max-w-md">
        <XCircle className="h-4 w-4" />
        <AlertTitle>Not Found</AlertTitle>
        <AlertDescription>
          The requested resource could not be found.
        </AlertDescription>
      </Alert>
    </div>
);

/**
 * Displays a preview of the downloaded book text.
 */
const BookPreviewPage = ({ text }: { text: string }) => {
  const [showFullText, setShowFullText] = useState(false);
  const displayedText = showFullText ? text : text.substring(0, 500);

  return (
      <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-8 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-md w-full max-w-3xl border border-gray-200 dark:border-gray-700"
      >
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
          <BookOpen className="mr-2 h-6 w-6 text-purple-500" />
          Book Preview
        </h2>
        <p className="text-gray-600 dark:text-gray-400 whitespace-pre-wrap leading-relaxed">
          {displayedText}
          {text.length > 500 && !showFullText && (
              <button
                  onClick={() => setShowFullText(true)}
                  className="text-blue-500 hover:underline ml-1 focus:outline-none"
              >
                Read More
              </button>
          )}
        </p>
        {showFullText && (
            <div className="mt-4">
              <Button
                  variant="outline"
                  onClick={() => setShowFullText(false)}
                  className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
              >
                Show Less
              </Button>
            </div>
        )}
      </motion.div>
  );
};

// --- Main Page ---

const GutenbergLLMApp = () => {
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [bookText, setBookText] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState<'form' | 'result' | 'error' | 'preview' | 'notfound'>('form');
  const [currentBookId, setCurrentBookId] = useState<number | null>(null);

  const handleSummarize = useCallback(async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    setError(null);
    setResult(null);
    setBookText(null); // Clear previous book text
    setCurrentBookId(data.bookId); //Store the bookId

    try {
      const apiUrl = '/api/process';
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          bookId: data.bookId
        }),
      });

      if (!response.ok) {
        if (response.status === 404) {
          setPage('notfound');
          return;
        }
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to process book');
      }

      const resultData = await response.json();
      setResult(resultData.result);
      setPage('result');

    } catch (err: any) {
      setError(err.message || 'An error occurred');
      setPage('error');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handlePreview = useCallback(async (bookId: number) => {
    setIsLoading(true);
    setError(null);
    setResult(null); // Clear any previous results
    setCurrentBookId(bookId);

    try {
      const apiUrl = `/api/processBook?bookId=${bookId}&preview=true`; // Or a separate endpoint
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        if (response.status === 404) {
          setPage('notfound');
          return;
        }
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch book preview');
      }

      const textData = await response.text();
      setBookText(textData);
      setPage('preview');

    } catch (err: any) {
      setError(err.message || 'An error occurred while fetching preview');
      setPage('error');
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Function to handle retry
  const handleRetry = () => {
    setPage('form'); // Go back to the form
    setError(null); // Clear the error
    setResult(null);
    setBookText(null);
    if (currentBookId) {
      handlePreview(currentBookId)
    }
  };

  return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-950 dark:to-black flex flex-col items-center">
        <header className="py-6 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Gutenberg & LLM
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Explore books from Project Gutenberg with LLMs
          </p>
        </header>

        <main className="flex-grow flex flex-col items-center justify-start p-4">
          {isLoading && (
              <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="mt-8 flex flex-col items-center"
              >
                <Loader2 className="animate-spin h-8 w-8 text-gray-700 dark:text-gray-300 mb-4" />
                <p className="text-gray-600 dark:text-gray-400">Loading...</p>
              </motion.div>
          )}

          {!isLoading && page === 'form' && (
              <div className="w-full">
                <BookIdInputForm onSubmit={handleSummarize} />
                <div className="mt-4 text-center">
                  <Button
                      variant="outline"
                      onClick={() => {
                        const randomId = Math.floor(Math.random() * 60000) + 1;  // Adjust max book ID as needed
                        handlePreview(randomId);
                      }}
                      className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
                  >
                    Preview Random Book
                  </Button>
                </div>
              </div>
          )}

          {!isLoading && page === 'result' && result && (
              <div className="w-full">
                <SummaryResult summary={result} />
                <div className="mt-4 text-center">
                  <Button
                      variant="outline"
                      onClick={handleRetry}
                      className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
                  >
                    Summarize Again
                  </Button>
                </div>
              </div>
          )}

          {!isLoading && page === 'error' && error && (
              <div className="w-full">
                <ErrorPage message={error} />
                <div className="mt-4 text-center">
                  <Button
                      variant="outline"
                      onClick={handleRetry}
                      className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
                  >
                    Try Again
                  </Button>
                </div>
              </div>
          )}

          {!isLoading && page === 'preview' && bookText && (
              <div className="w-full">
                <BookPreviewPage text={bookText} />
                <div className="mt-4 text-center">
                  <Button
                      variant="outline"
                      onClick={handleRetry}
                      className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
                  >
                    Go Back
                  </Button>
                </div>
              </div>
          )}

          {!isLoading && page === 'notfound' && <NotFoundPage />}
        </main>

        <footer className="py-4 text-center text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Gutenberg & LLM. All rights reserved.</p>
        </footer>
      </div>
  );
};

export default GutenbergLLMApp;