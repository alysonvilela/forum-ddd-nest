import { InMemoryQuestionsRepository } from '@/test/repositories/questions-repository-in-memory'
import { CreateQuestionUseCase } from './create-question'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let sut: CreateQuestionUseCase

describe('Create Question', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
    sut = new CreateQuestionUseCase(inMemoryQuestionsRepository)
  })

  it('should be able to create an question', async () => {
    const result = await sut.execute({
      authorId: '1',
      title: 'Some title',
      content: 'Some content',
    })

    expect(result.isRight()).toBeTruthy()
    if (result.isRight()) {
      expect(result.value.question.content).toEqual('Some content')
      expect(inMemoryQuestionsRepository.items[0].id).toEqual(
        result.value.question.id,
      )
    }
  })
})
