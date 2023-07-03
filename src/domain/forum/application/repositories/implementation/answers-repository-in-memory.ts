import { Answer } from '@/domain/forum/enterprise/entities/answer'
import { AnswersRepository } from '../answers-repository'

export class InMemoryAnswersRepository implements AnswersRepository {
  async create(answer: Answer) {
    // throw new Error("Method not implemented.");
  }
}
