import { Answer } from "../../entities/answer";
import { AnswersRepository } from "../answers-repository";

export class InMemoryAnswersRepository implements AnswersRepository {
   async create(answer: Answer) {
      // throw new Error("Method not implemented.");
      return 
   }
}