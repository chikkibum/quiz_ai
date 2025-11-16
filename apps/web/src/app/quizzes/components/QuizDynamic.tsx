import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MotionWrapper } from "@/components/ui/motion-wrapper";
import { getQuizzes } from "@/lib/query";

async function quizDynamic() {
  const quizData = await getQuizzes();

  if (!quizData) {
    return <div>No quizzes found</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {quizData?.map((quiz) => (
        <MotionWrapper
          initial={{ opacity: 0, y: 100 }}
          key={quiz.id}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>{quiz.title}</CardTitle>
              <CardDescription>{quiz.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{quiz?.difficulty}</p>
            </CardContent>
          </Card>
        </MotionWrapper>
      ))}
    </div>
  );
}

export default quizDynamic;
