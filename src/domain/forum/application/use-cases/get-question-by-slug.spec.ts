import { GetQuestionBySlug } from './get-question-by-slug'
import { Slug } from '../../enterprise/entities/value-objects/slug'
import { InMemoryQuestionsRepository } from '@/test/repositories/questions-repository-in-memory'
import { makeQuestion } from '@/test/factories/make-question'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let sut: GetQuestionBySlug

describe('Get Question By Slug', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
    sut = new GetQuestionBySlug(inMemoryQuestionsRepository)
  })

  it('should be able to find a question by slug', async () => {
    const newQuestion = makeQuestion({
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
