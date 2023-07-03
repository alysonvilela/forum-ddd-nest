import { InMemoryAnswersRepository } from '../repositories/implementation/answers-repository-in-memory'
import { AnswerQuestionUseCase } from './answer-question'

let inMemoryAnswersRepository: InMemoryAnswersRepository
let sut: AnswerQuestionUseCase

describe('Answer Question', () => {
  beforeEach(() => {
    inMemoryAnswersRepository = new InMemoryAnswersRepository()
    sut = new AnswerQuestionUseCase(inMemoryAnswersRepository)
  })

  it('should be able to create an answer', async () => {
    const { answer } = await sut.execute({
      content: 'Some response',
      instructorId: '1',
      questionId: '1',
    })

    expect(answer.content).toEqual('Some response')
    expect(inMemoryAnswersRepository.items[0].id).toEqual(answer.id)
  })
})
