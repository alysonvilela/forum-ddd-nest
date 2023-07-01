import {v4 as uuidV4} from 'uuid'

export class Answer {
   public id: string

   constructor(public content: string, id?: string) {
      this.id = id ?? uuidV4()
   }
}

