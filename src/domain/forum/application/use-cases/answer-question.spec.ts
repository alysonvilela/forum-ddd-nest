import { InMemoryAnswersRepository } from '@/test/repositories/answers-repository-in-memory'
import { AnswerQuestionUseCase } from './answer-question'

let inMemoryAnswersRepository: InMemoryAnswersRepository
let sut: AnswerQuestionUseCase

describe('Answer Question', () => {
  beforeEach(() => {
    inMemoryAnswersRepository = new InMemoryAnswersRepository()
    sut = new AnswerQuestionUseCase(inMemoryAnswersRepository)
  })

  it('should be able to create an answer', async () => {
    const result = await sut.execute({
      content: 'Some response',
      instructorId: '1',
      questionId: '1',
    })

    expect(result.isRight()).toBeTruthy()
    if (result.isRight()) {
      expect(inMemoryAnswersRepository.items[0].id).toEqual(
        result.value.answer.id,
      )
    }
  })
})
