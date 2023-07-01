import {v4 as uuidV4} from 'uuid'

export class Question {
   public id: string

   constructor(public title: string, public content: string, id?: string) {
      this.id = id ?? uuidV4()
   }
}

