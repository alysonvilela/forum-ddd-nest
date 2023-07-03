import { InMemoryQuestionsRepository } from '../repositories/implementation/questions-repository-in-memory'
import { CreateQuestionUseCase } from './create-question'

const inMemoryQuestionsRepository = new InMemoryQuestionsRepository()

test('create an answer', async () => {
  const createQuestion = new CreateQuestionUseCase(inMemoryQuestionsRepository)
  const { question } = await createQuestion.execute({
    authorId: '1',
    title: 'Some title',
    content: 'Some content',
  })

  expect(question.content).toEqual('Some content')
})
