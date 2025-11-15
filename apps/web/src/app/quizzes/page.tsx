import { Suspense } from "react";
import prisma from "@/lib/prisma";
import QuizDynamic from "./components/QuizDynamic";

export default async function Page() {
  const data = await prisma.quiz.findMany();
  console.log(data);

  return (
    <div>
      <Suspense fallback={<div>Loading quizzes...</div>}>
        <QuizDynamic />
      </Suspense>
    </div>
  );
}
