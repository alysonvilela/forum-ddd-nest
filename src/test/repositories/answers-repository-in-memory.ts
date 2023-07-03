import { AnswersRepository } from '@/domain/forum/application/repositories/answers-repository'
import { Answer } from '@/domain/forum/enterprise/entities/answer'

export class InMemoryAnswersRepository implements AnswersRepository {
  public items: Answer[] = []

  async create(answer: Answer) {
    this.items.push(answer)
  }

  async save(answer: Answer) {
    const itemIdx = this.items.findIndex((item) => item.id === answer.id)
    this.items[itemIdx] = answer
  }

  async delete(answer: Answer) {
    const itemIdx = this.items.findIndex((item) => item.id === answer.id)
    this.items.splice(itemIdx, 1)
  }

  async findById(id: string) {
    const answer = this.items.find((answer) => answer.id.toString() === id)
    if (!answer) {
      return null
    }

    return answer
  }
}
