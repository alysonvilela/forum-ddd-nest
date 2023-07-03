import { InMemoryQuestionsRepository } from '@/test/repositories/questions-repository-in-memory'
import { CreateQuestionUseCase } from './create-question'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let sut: CreateQuestionUseCase

describe('Create Question', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
    sut = new CreateQuestionUseCase(inMemoryQuestionsRepository)
  })

  it('should be able to create an answer', async () => {
    const { question } = await sut.execute({
      authorId: '1',
      title: 'Some title',
      content: 'Some content',
    })

    expect(question.content).toEqual('Some content')
    expect(inMemoryQuestionsRepository.items[0].id).toEqual(question.id)
  })
})
