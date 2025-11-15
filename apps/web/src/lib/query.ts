import prisma from "./prisma";

export const getQuizzes = async () => {
  // const prisma = new PrismaClient();
  return await prisma.quiz.findMany();
};

// export const getQuizById = async (id: number) => {
//     // const prisma = new PrismaClient();
//     return await prisma.quiz.findUnique({
//         where: { id },
//     });
// };
