import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  Question,
  QuestionProps,
} from '@/domain/forum/enterprise/entities/question'
import { Slug } from '@/domain/forum/enterprise/entities/value-objects/slug'

export function makeQuestion(override: Partial<QuestionProps>) {
  return Question.create({
    authorId: new UniqueEntityID(),
    content: 'Some content',
    title: 'Some title getted by slug',
    slug: Slug.create('some-slug'),
    ...override,
  })
}
