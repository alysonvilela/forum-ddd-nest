import { v4 as uuidV4 } from "uuid";

export class UniqueEntityID {
  private value: string;

  toString() {
    return this.value;
  }

  toValue() {
    return this.value;
  }

  constructor(value?: string) {
    this.value = value ?? uuidV4();
  }
}
