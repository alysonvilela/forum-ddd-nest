import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Optional } from '@/types/optional'
import { Comment, CommentProps } from './comment'

export interface AnswerCommentProps extends CommentProps {
  answerId: UniqueEntityID
}
export class AnswerComment extends Comment<AnswerCommentProps> {
  static create(
    props: Optional<AnswerCommentProps, 'createdAt'>,
    id?: UniqueEntityID,
  ) {
    const answer = new AnswerComment(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    )

    return answer
  }

  get answerId() {
    return this.props.answerId
  }
}
