import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Question } from '../../enterprise/entities/question'
import { InMemoryQuestionsRepository } from '../repositories/implementation/questions-repository-in-memory'
import { GetQuestionBySlug } from './get-question-by-slug'
import { Slug } from '../../enterprise/entities/value-objects/slug'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let sut: GetQuestionBySlug

describe('Get Question By Slug', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
    sut = new GetQuestionBySlug(inMemoryQuestionsRepository)
  })

  it('should be able to find a question by slug', async () => {
    const newQuestion = Question.create({
      authorId: new UniqueEntityID('some-id'),
      content: 'Some content',
      title: 'Some title getted by slug',
      slug: Slug.create('some-slug'),
    })
    await inMemoryQuestionsRepository.create(newQuestion)

    const { question } = await sut.execute({
      slug: 'some-slug',
    })

    expect(question).toBeTruthy()
    expect(question.title).toEqual(newQuestion.title)
  })
})
