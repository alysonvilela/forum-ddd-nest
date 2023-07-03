import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Optional } from '@/types/optional'
import { Comment, CommentProps } from './comment'

export interface QuestionCommentProps extends CommentProps {
  questionId: UniqueEntityID
}
export class QuestionComment extends Comment<QuestionCommentProps> {
  static create(
    props: Optional<QuestionCommentProps, 'createdAt'>,
    id?: UniqueEntityID,
  ) {
    const question = new QuestionComment(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    )

    return question
  }

  get questionId() {
    return this.props.questionId
  }
}
