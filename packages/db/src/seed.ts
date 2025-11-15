import { PrismaClient } from "../prisma/generated/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting seed...");

  // Clean existing data
  console.log("🧹 Cleaning existing data...");
  await prisma.userAnswer.deleteMany();
  await prisma.attempt.deleteMany();
  await prisma.option.deleteMany();
  await prisma.question.deleteMany();
  await prisma.quiz.deleteMany();
  await prisma.userStats.deleteMany();
  await prisma.session.deleteMany();
  await prisma.account.deleteMany();
  await prisma.verification.deleteMany();
  await prisma.user.deleteMany();

  // Create users
  console.log("👥 Creating users...");
  const user1 = await prisma.user.create({
    data: {
      id: "user_1",
      name: "Alice Johnson",
      email: "alice@example.com",
      emailVerified: true,
      role: "user",
      createdAt: new Date(),
      updatedAt: new Date(),
      userStats: {
        create: {
          xp: 150,
          streak: 5,
        },
      },
    },
  });

  const user2 = await prisma.user.create({
    data: {
      id: "user_2",
      name: "Bob Smith",
      email: "bob@example.com",
      emailVerified: true,
      role: "user",
      createdAt: new Date(),
      updatedAt: new Date(),
      userStats: {
        create: {
          xp: 75,
          streak: 2,
        },
      },
    },
  });

  const adminUser = await prisma.user.create({
    data: {
      id: "admin_1",
      name: "Admin User",
      email: "admin@example.com",
      emailVerified: true,
      role: "admin",
      createdAt: new Date(),
      updatedAt: new Date(),
      userStats: {
        create: {
          xp: 500,
          streak: 15,
        },
      },
    },
  });

  // Create quizzes with questions and options
  console.log("📝 Creating quizzes...");

  // JavaScript Quiz
  const jsQuiz = await prisma.quiz.create({
    data: {
      title: "JavaScript Fundamentals",
      description: "Test your knowledge of core JavaScript concepts",
      category: "Programming",
      difficulty: "medium",
      timeLimit: 600,
      published: true,
      questions: {
        create: [
          {
            text: "What is the output of: typeof null?",
            explanation:
              'This is a known JavaScript quirk. typeof null returns "object" due to a bug in the original JavaScript implementation that was never fixed for backwards compatibility.',
            position: 1,
            options: {
              create: [
                { text: '"null"', isCorrect: false },
                { text: '"object"', isCorrect: true },
                { text: '"undefined"', isCorrect: false },
                { text: '"number"', isCorrect: false },
              ],
            },
          },
          {
            text: "Which method is used to add elements to the end of an array?",
            explanation:
              "The push() method adds one or more elements to the end of an array and returns the new length of the array.",
            position: 2,
            options: {
              create: [
                { text: "push()", isCorrect: true },
                { text: "pop()", isCorrect: false },
                { text: "shift()", isCorrect: false },
                { text: "unshift()", isCorrect: false },
              ],
            },
          },
          {
            text: 'What does "=== " check in JavaScript?',
            explanation:
              "The strict equality operator (===) checks both value and type without type coercion.",
            position: 3,
            options: {
              create: [
                { text: "Only value", isCorrect: false },
                { text: "Only type", isCorrect: false },
                { text: "Both value and type", isCorrect: true },
                { text: "Reference equality", isCorrect: false },
              ],
            },
          },
        ],
      },
    },
  });

  // Python Quiz
  const pythonQuiz = await prisma.quiz.create({
    data: {
      title: "Python Basics",
      description: "Learn the fundamentals of Python programming",
      category: "Programming",
      difficulty: "easy",
      timeLimit: 300,
      published: true,
      questions: {
        create: [
          {
            text: "Which of the following is used to define a function in Python?",
            explanation:
              'In Python, functions are defined using the "def" keyword followed by the function name and parentheses.',
            position: 1,
            options: {
              create: [
                { text: "function", isCorrect: false },
                { text: "def", isCorrect: true },
                { text: "func", isCorrect: false },
                { text: "define", isCorrect: false },
              ],
            },
          },
          {
            text: "What is the correct file extension for Python files?",
            explanation: "Python files use the .py extension.",
            position: 2,
            options: {
              create: [
                { text: ".python", isCorrect: false },
                { text: ".pt", isCorrect: false },
                { text: ".py", isCorrect: true },
                { text: ".pyt", isCorrect: false },
              ],
            },
          },
        ],
      },
    },
  });

  // Geography Quiz
  const geoQuiz = await prisma.quiz.create({
    data: {
      title: "World Geography",
      description: "Test your knowledge of countries, capitals, and landmarks",
      category: "Geography",
      difficulty: "hard",
      timeLimit: 900,
      published: true,
      questions: {
        create: [
          {
            text: "What is the capital of Australia?",
            explanation:
              "Canberra is the capital of Australia, not Sydney or Melbourne as commonly thought.",
            position: 1,
            options: {
              create: [
                { text: "Sydney", isCorrect: false },
                { text: "Melbourne", isCorrect: false },
                { text: "Canberra", isCorrect: true },
                { text: "Brisbane", isCorrect: false },
              ],
            },
          },
          {
            text: "Which is the largest ocean on Earth?",
            explanation:
              "The Pacific Ocean is the largest and deepest ocean, covering more than 30% of Earth's surface.",
            position: 2,
            options: {
              create: [
                { text: "Atlantic Ocean", isCorrect: false },
                { text: "Indian Ocean", isCorrect: false },
                { text: "Arctic Ocean", isCorrect: false },
                { text: "Pacific Ocean", isCorrect: true },
              ],
            },
          },
          {
            text: "How many countries are in Africa?",
            explanation:
              "Africa has 54 recognized sovereign countries, making it the continent with the most countries.",
            position: 3,
            options: {
              create: [
                { text: "48", isCorrect: false },
                { text: "52", isCorrect: false },
                { text: "54", isCorrect: true },
                { text: "56", isCorrect: false },
              ],
            },
          },
        ],
      },
    },
  });

  // Draft Quiz (unpublished)
  await prisma.quiz.create({
    data: {
      title: "Advanced React Patterns",
      description: "Coming soon - Advanced patterns and best practices",
      category: "Programming",
      difficulty: "hard",
      timeLimit: 1200,
      published: false,
      questions: {
        create: [
          {
            text: "What is a Higher-Order Component (HOC)?",
            position: 1,
            options: {
              create: [
                {
                  text: "A component that renders other components",
                  isCorrect: false,
                },
                {
                  text: "A function that takes a component and returns a new component",
                  isCorrect: true,
                },
                { text: "A component with state", isCorrect: false },
                { text: "A class component", isCorrect: false },
              ],
            },
          },
        ],
      },
    },
  });

  // Create attempts
  console.log("🎯 Creating quiz attempts...");

  const jsQuestions = await prisma.question.findMany({
    where: { quizId: jsQuiz.id },
    include: { options: true },
  });

  const pythonQuestions = await prisma.question.findMany({
    where: { quizId: pythonQuiz.id },
    include: { options: true },
  });

  // User 1 completes JS quiz
  await prisma.attempt.create({
    data: {
      userId: user1.id,
      quizId: jsQuiz.id,
      score: 2,
      total: 3,
      completedAt: new Date(),
      duration: 480,
      answers: {
        create: [
          {
            questionId: jsQuestions[0].id,
            optionId: jsQuestions[0].options.find((o) => o.isCorrect)?.id,
          },
          {
            questionId: jsQuestions[1].id,
            optionId: jsQuestions[1].options.find((o) => o.isCorrect)?.id,
          },
          {
            questionId: jsQuestions[2].id,
            optionId: jsQuestions[2].options.find((o) => !o.isCorrect)?.id,
          },
        ],
      },
    },
  });

  // User 2 completes Python quiz
  await prisma.attempt.create({
    data: {
      userId: user2.id,
      quizId: pythonQuiz.id,
      score: 2,
      total: 2,
      completedAt: new Date(),
      duration: 240,
      answers: {
        create: [
          {
            questionId: pythonQuestions[0].id,
            optionId: pythonQuestions[0].options.find((o) => o.isCorrect)?.id,
          },
          {
            questionId: pythonQuestions[1].id,
            optionId: pythonQuestions[1].options.find((o) => o.isCorrect)?.id,
          },
        ],
      },
    },
  });

  // User 1 has an incomplete attempt on Geography
  await prisma.attempt.create({
    data: {
      userId: user1.id,
      quizId: geoQuiz.id,
      score: 0,
      total: 3,
      completedAt: null,
      duration: null,
    },
  });

  console.log("✅ Seed completed successfully!");
  console.log(`
📊 Summary:
- Users: 3
- Quizzes: 4 (3 published, 1 draft)
- Questions: 9
- Attempts: 3 (2 completed, 1 in progress)
  `);
}

main()
  .catch((e) => {
    console.error("❌ Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
