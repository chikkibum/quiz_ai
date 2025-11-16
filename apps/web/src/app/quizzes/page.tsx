import { Suspense } from "react";
import { MaxWidthWrapper } from "@/components/ui/max-w-wrapper";
import prisma from "@/lib/prisma";
import QuizDynamic from "./components/QuizDynamic";
import { NavbarDemo } from "./Nav";
// import { Navbar } from "@/components/ui/resizable-navbar";
// import Link from "next/link";
// import { NavBody, NavItems, NavItem } from "@/components/ui/resizable-navbar";

export default async function Page() {
  const data = await prisma.quiz.findMany();
  console.log(data);

  return (
    <MaxWidthWrapper className="px-4 py-12">
      <NavbarDemo />
      {/* <Navbar> 
        <NavItems items={[{ name: "Home", link: "/" }]} />
      </Navbar> */}
      <Suspense fallback={<div>Loading quizzes...</div>}>
        <QuizDynamic />
      </Suspense>
    </MaxWidthWrapper>
  );
}
