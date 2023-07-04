import { AnswerCommentsRepository } from '@/domain/forum/application/repositories/answer-comments-repository'
import { AnswerComment } from '@/domain/forum/enterprise/entities/answer-comment'

export class InMemoryAnswerCommentsRepository
  implements AnswerCommentsRepository
{
  public items: AnswerComment[] = []
  async create(comment: AnswerComment) {
    this.items.push(comment)
  }

  async delete(answerComment: AnswerComment) {
    const itemIdx = this.items.findIndex((item) => item.id === answerComment.id)
    this.items.splice(itemIdx, 1)
  }

  async findById(id: string) {
    const answerComment = this.items.find((item) => item.id.toString() === id)
    if (!answerComment) {
      return null
    }

    return answerComment
  }
}
