import { Answer } from "../entities/answer"

interface AnswerQuestionUseCaseRequest {
   instructorId: string
   questionId: string
   content: string
}

export class AnswerQUestionUseCase {
   execute({instructorId, questionId, content}: AnswerQuestionUseCaseRequest) {
      const answer = new Answer(content)
      return answer
   }
}