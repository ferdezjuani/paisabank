/*
  Warnings:

  - You are about to drop the `Movement` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `currency` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expDate` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `issuer` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastDigits` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Card` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Movement" DROP CONSTRAINT "Movement_cardId_fkey";

-- AlterTable
ALTER TABLE "Card" ADD COLUMN     "currency" TEXT NOT NULL,
ADD COLUMN     "expDate" TEXT NOT NULL,
ADD COLUMN     "issuer" TEXT NOT NULL,
ADD COLUMN     "lastDigits" INTEGER NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ALTER COLUMN "balance" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "Movement";

-- CreateTable
CREATE TABLE "Transaction" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "transactionType" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
