import { getQuizzes } from "@/lib/query";

async function quizDynamic() {
  const quizData = await getQuizzes();

  console.log(quizData);
  return (
    <div>
      {
        // data.map((quiz) => (
        //     <div key={quiz.id}>
        //         <h2>{quiz.title}</h2>
        //         <p>{quiz.description}</p>
        //     </div>
        // ))

        quizData?.map((quiz) => (
          <div key={quiz.id}>
            <h2>{quiz.title}</h2>
            <p>{quiz.description}</p>
          </div>
        ))
      }
    </div>
  );
}

export default quizDynamic;
