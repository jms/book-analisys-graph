-- CreateTable
CREATE TABLE "BookText" (
    "bookId" INTEGER NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "BookText_pkey" PRIMARY KEY ("bookId")
);

-- CreateTable
CREATE TABLE "LlmResponse" (
    "bookId" INTEGER NOT NULL,
    "prompt" TEXT NOT NULL,
    "response" TEXT NOT NULL,

    CONSTRAINT "LlmResponse_pkey" PRIMARY KEY ("bookId","prompt")
);
