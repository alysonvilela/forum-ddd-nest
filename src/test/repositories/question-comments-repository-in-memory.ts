import { PaginationParams } from '@/core/repositories/pagination-params'
import { QuestionCommentsRepository } from '@/domain/forum/application/repositories/question-comments-repository'
import { QuestionComment } from '@/domain/forum/enterprise/entities/question-comment'

export class InMemoryQuestionCommentsRepository
  implements QuestionCommentsRepository
{
  public items: QuestionComment[] = []
  async create(comment: QuestionComment) {
    this.items.push(comment)
  }

  async delete(questionComment: QuestionComment) {
    const itemIdx = this.items.findIndex(
      (item) => item.id === questionComment.id,
    )
    this.items.splice(itemIdx, 1)
  }

  async findById(id: string) {
    const questionComment = this.items.find((item) => item.id.toString() === id)
    if (!questionComment) {
      return null
    }

    return questionComment
  }

  async findManyByQuestionId(id: string, { page }: PaginationParams) {
    const questionComments = this.items
      .filter((i) => i.questionId.toString() === id)
      .slice((page - 1) * 20, page * 20)

    return questionComments
  }
}