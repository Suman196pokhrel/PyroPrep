-- CreateTable
CREATE TABLE "Domain" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Domain_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subdomain" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "domain_id" TEXT NOT NULL,

    CONSTRAINT "Subdomain_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Quizset" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "subdomain_id" TEXT NOT NULL,

    CONSTRAINT "Quizset_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Question" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "quizset_id" TEXT NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Answer" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "question_id" TEXT NOT NULL,
    "is_correct" BOOLEAN NOT NULL,

    CONSTRAINT "Answer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserQuiz" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "quizset_id" TEXT NOT NULL,
    "quiz_duration" TEXT NOT NULL,
    "score" INTEGER NOT NULL,

    CONSTRAINT "UserQuiz_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserAnswer" (
    "id" TEXT NOT NULL,
    "userquiz_id" TEXT NOT NULL,
    "question_id" TEXT NOT NULL,
    "answer_id" TEXT NOT NULL,

    CONSTRAINT "UserAnswer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Subdomain" ADD CONSTRAINT "Subdomain_domain_id_fkey" FOREIGN KEY ("domain_id") REFERENCES "Domain"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Quizset" ADD CONSTRAINT "Quizset_subdomain_id_fkey" FOREIGN KEY ("subdomain_id") REFERENCES "Subdomain"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_quizset_id_fkey" FOREIGN KEY ("quizset_id") REFERENCES "Quizset"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserQuiz" ADD CONSTRAINT "UserQuiz_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserQuiz" ADD CONSTRAINT "UserQuiz_quizset_id_fkey" FOREIGN KEY ("quizset_id") REFERENCES "Quizset"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAnswer" ADD CONSTRAINT "UserAnswer_userquiz_id_fkey" FOREIGN KEY ("userquiz_id") REFERENCES "UserQuiz"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAnswer" ADD CONSTRAINT "UserAnswer_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAnswer" ADD CONSTRAINT "UserAnswer_answer_id_fkey" FOREIGN KEY ("answer_id") REFERENCES "Answer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
