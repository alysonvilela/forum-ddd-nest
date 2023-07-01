import { v4 as uuidV4 } from "uuid";

interface AnswerProps {
  content: string;
  authorId: string;
  questionId: string;
}
export class Answer {
  public id: string;
  public content: string;
  public authorId: string;
  public questionId: string;

  constructor(public props: AnswerProps, id?: string) {
    this.content = props.content;
    this.authorId = props.authorId;
    this.questionId = props.questionId;
    this.id = id ?? uuidV4();
  }
}
