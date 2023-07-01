import { expect, test } from "vitest";
import { AnswerQuestionUseCase } from "./answer-question";
import { InMemoryAnswersRepository } from "../repositories/implementation/answers-repository-in-memory";

const inMemoryAnswersRepository = new InMemoryAnswersRepository()

test("create an answer", async () => {

  const answerQuestion = new AnswerQuestionUseCase(inMemoryAnswersRepository);
  const answer = await answerQuestion.execute({
   content: 'Uma resposta',
   instructorId: '1',
   questionId: '1',
  })

  expect(answer.content).toEqual('Uma resposta')
});
