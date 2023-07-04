import { InMemoryQuestionsRepository } from '@/test/repositories/questions-repository-in-memory'
import { InMemoryQuestionCommentsRepository } from '@/test/repositories/question-comments-repository-in-memory'
import { CommentOnQuestionUseCase } from './comment-on-question'
import { makeQuestion } from '@/test/factories/make-question'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let inMemoryQuestionCommentsRepository: InMemoryQuestionCommentsRepository
let sut: CommentOnQuestionUseCase

describe('Comment on Question', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
    inMemoryQuestionCommentsRepository =
      new InMemoryQuestionCommentsRepository()
    sut = new CommentOnQuestionUseCase(
      inMemoryQuestionsRepository,
      inMemoryQuestionCommentsRepository,
    )
  })

  it.only('should be able to create an question', async () => {
    const question = makeQuestion()
    await inMemoryQuestionsRepository.create(question)

    const { questionComment } = await sut.execute({
      questionId: question.id.toString(),
      authorId: 'author-1',
      content: 'New Content',
    })

    expect(questionComment.questionId).toEqual(question.id)
    expect(inMemoryQuestionCommentsRepository.items[0]).toEqual(questionComment)
  })
})
