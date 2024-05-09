/*
  Warnings:

  - You are about to drop the column `is_correct` on the `Answer` table. All the data in the column will be lost.
  - You are about to drop the column `question_id` on the `Answer` table. All the data in the column will be lost.
  - You are about to drop the column `quizset_id` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the column `subdomain_id` on the `Quizset` table. All the data in the column will be lost.
  - You are about to drop the column `domain_id` on the `Subdomain` table. All the data in the column will be lost.
  - You are about to drop the column `answer_id` on the `UserAnswer` table. All the data in the column will be lost.
  - You are about to drop the column `question_id` on the `UserAnswer` table. All the data in the column will be lost.
  - You are about to drop the column `userquiz_id` on the `UserAnswer` table. All the data in the column will be lost.
  - You are about to drop the column `quiz_duration` on the `UserQuiz` table. All the data in the column will be lost.
  - You are about to drop the column `quizset_id` on the `UserQuiz` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `UserQuiz` table. All the data in the column will be lost.
  - Added the required column `isCorrect` to the `Answer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `questionId` to the `Answer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quizSetId` to the `Question` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subdomainId` to the `Quizset` table without a default value. This is not possible if the table is not empty.
  - Added the required column `domainId` to the `Subdomain` table without a default value. This is not possible if the table is not empty.
  - Added the required column `answerId` to the `UserAnswer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `questionId` to the `UserAnswer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userQuizId` to the `UserAnswer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quizDuration` to the `UserQuiz` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quizsetId` to the `UserQuiz` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `UserQuiz` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Answer" DROP CONSTRAINT "Answer_question_id_fkey";

-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_quizset_id_fkey";

-- DropForeignKey
ALTER TABLE "Quizset" DROP CONSTRAINT "Quizset_subdomain_id_fkey";

-- DropForeignKey
ALTER TABLE "Subdomain" DROP CONSTRAINT "Subdomain_domain_id_fkey";

-- DropForeignKey
ALTER TABLE "UserAnswer" DROP CONSTRAINT "UserAnswer_answer_id_fkey";

-- DropForeignKey
ALTER TABLE "UserAnswer" DROP CONSTRAINT "UserAnswer_question_id_fkey";

-- DropForeignKey
ALTER TABLE "UserAnswer" DROP CONSTRAINT "UserAnswer_userquiz_id_fkey";

-- DropForeignKey
ALTER TABLE "UserQuiz" DROP CONSTRAINT "UserQuiz_quizset_id_fkey";

-- DropForeignKey
ALTER TABLE "UserQuiz" DROP CONSTRAINT "UserQuiz_user_id_fkey";

-- AlterTable
ALTER TABLE "Answer" DROP COLUMN "is_correct",
DROP COLUMN "question_id",
ADD COLUMN     "isCorrect" BOOLEAN NOT NULL,
ADD COLUMN     "questionId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Question" DROP COLUMN "quizset_id",
ADD COLUMN     "quizSetId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Quizset" DROP COLUMN "subdomain_id",
ADD COLUMN     "subdomainId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Subdomain" DROP COLUMN "domain_id",
ADD COLUMN     "domainId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "UserAnswer" DROP COLUMN "answer_id",
DROP COLUMN "question_id",
DROP COLUMN "userquiz_id",
ADD COLUMN     "answerId" TEXT NOT NULL,
ADD COLUMN     "questionId" TEXT NOT NULL,
ADD COLUMN     "userQuizId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "UserQuiz" DROP COLUMN "quiz_duration",
DROP COLUMN "quizset_id",
DROP COLUMN "user_id",
ADD COLUMN     "quizDuration" TEXT NOT NULL,
ADD COLUMN     "quizsetId" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Subdomain" ADD CONSTRAINT "Subdomain_domainId_fkey" FOREIGN KEY ("domainId") REFERENCES "Domain"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Quizset" ADD CONSTRAINT "Quizset_subdomainId_fkey" FOREIGN KEY ("subdomainId") REFERENCES "Subdomain"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_quizSetId_fkey" FOREIGN KEY ("quizSetId") REFERENCES "Quizset"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserQuiz" ADD CONSTRAINT "UserQuiz_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserQuiz" ADD CONSTRAINT "UserQuiz_quizsetId_fkey" FOREIGN KEY ("quizsetId") REFERENCES "Quizset"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAnswer" ADD CONSTRAINT "UserAnswer_userQuizId_fkey" FOREIGN KEY ("userQuizId") REFERENCES "UserQuiz"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAnswer" ADD CONSTRAINT "UserAnswer_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAnswer" ADD CONSTRAINT "UserAnswer_answerId_fkey" FOREIGN KEY ("answerId") REFERENCES "Answer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
