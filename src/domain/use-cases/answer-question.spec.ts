import { expect, test } from "vitest";
import { AnswerQUestionUseCase } from "./answer-question";

test("create an answer", () => {
  const answerQuestion = new AnswerQUestionUseCase();
  const answer = answerQuestion.execute({
   content: 'Uma resposta',
   instructorId: '1',
   questionId: '1'
  })

  expect(answer.content).toEqual('Uma resposta')
});
