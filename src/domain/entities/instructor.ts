import {v4 as uuidV4} from 'uuid'

export class Instructor {
   public id: string
   constructor(public name: string, id?: string) {
      this.id = id ?? uuidV4()
   }
}