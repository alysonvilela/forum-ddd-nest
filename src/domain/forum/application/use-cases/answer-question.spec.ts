import { InMemoryAnswersRepository } from '../repositories/implementation/answers-repository-in-memory'
import { AnswerQuestionUseCase } from './answer-question'

const inMemoryAnswersRepository = new InMemoryAnswersRepository()

test('create an answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(inMemoryAnswersRepository)
  const answer = await answerQuestion.execute({
    content: 'Uma resposta',
    instructorId: '1',
    questionId: '1',
  })

  expect(answer.content).toEqual('Uma resposta')
})
