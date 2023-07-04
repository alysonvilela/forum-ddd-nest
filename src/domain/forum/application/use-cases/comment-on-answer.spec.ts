import { InMemoryAnswersRepository } from '@/test/repositories/answers-repository-in-memory'
import { InMemoryAnswerCommentsRepository } from '@/test/repositories/answer-comments-repository-in-memory'
import { CommentOnAnswerUseCase } from './comment-on-answer'
import { makeAnswer } from '@/test/factories/make-answer'

let inMemoryAnswersRepository: InMemoryAnswersRepository
let inMemoryAnswerCommentsRepository: InMemoryAnswerCommentsRepository
let sut: CommentOnAnswerUseCase

describe('Comment on Answer', () => {
  beforeEach(() => {
    inMemoryAnswersRepository = new InMemoryAnswersRepository()
    inMemoryAnswerCommentsRepository = new InMemoryAnswerCommentsRepository()
    sut = new CommentOnAnswerUseCase(
      inMemoryAnswersRepository,
      inMemoryAnswerCommentsRepository,
    )
  })

  it.only('should be able to create an answer', async () => {
    const answer = makeAnswer()
    await inMemoryAnswersRepository.create(answer)

    const { answerComment } = await sut.execute({
      answerId: answer.id.toString(),
      authorId: 'author-1',
      content: 'New Content',
    })

    expect(answerComment.answerId).toEqual(answer.id)
    expect(inMemoryAnswerCommentsRepository.items[0]).toEqual(answerComment)
  })
})
