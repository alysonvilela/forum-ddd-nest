import { InMemoryQuestionsRepository } from '@/test/repositories/questions-repository-in-memory'
import { EditQuestionUseCase } from './edit-question'
import { makeQuestion } from '@/test/factories/make-question'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let sut: EditQuestionUseCase

describe('Edit Question', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
    sut = new EditQuestionUseCase(inMemoryQuestionsRepository)
  })

  it('should be able to edit an question', async () => {
    const newQuestion = makeQuestion(
      {
        authorId: new UniqueEntityID('author-1'),
      },
      new UniqueEntityID('question-1'),
    )
    inMemoryQuestionsRepository.create(newQuestion)

    await sut.execute({
      authorId: newQuestion.authorId.toString(),
      questionId: newQuestion.id.toString(),
      title: 'New Title',
      content: 'New Content',
    })

    expect(inMemoryQuestionsRepository.items[0]).toMatchObject({
      title: 'New Title',
      content: 'New Content',
    })
  })

  it('should not be able to edit an question from another user', async () => {
    const newQuestion = makeQuestion(
      {
        authorId: new UniqueEntityID('author-1'),
      },
      new UniqueEntityID('question-1'),
    )
    inMemoryQuestionsRepository.create(newQuestion)

    await expect(
      sut.execute({
        authorId: 'author-2',
        questionId: newQuestion.id.toString(),
        title: 'New Title',
        content: 'New Content',
      }),
    ).rejects.toBeInstanceOf(Error)
    expect(inMemoryQuestionsRepository.items[0]).toEqual(newQuestion)
  })
})
