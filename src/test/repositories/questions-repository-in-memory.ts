import { QuestionsRepository } from '@/domain/forum/application/repositories/questions-repository'
import { Question } from '@/domain/forum/enterprise/entities/question'

export class InMemoryQuestionsRepository implements QuestionsRepository {
  public items: Question[] = []
  async create(question: Question) {
    this.items.push(question)
  }

  async save(question: Question) {
    const itemIdx = this.items.findIndex((item) => item.id === question.id)
    this.items[itemIdx] = question
  }

  async delete(question: Question) {
    const itemIdx = this.items.findIndex((item) => item.id === question.id)
    this.items.splice(itemIdx, 1)
  }

  async findBySlug(slug: string) {
    const question = this.items.find((question) => question.slug.value === slug)
    if (!question) {
      return null
    }

    return question
  }

  async findById(id: string) {
    const question = this.items.find(
      (question) => question.id.toString() === id,
    )
    if (!question) {
      return null
    }

    return question
  }
}
