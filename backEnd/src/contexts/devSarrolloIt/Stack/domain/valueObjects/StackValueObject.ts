import { StackModel } from "../estities/StackEntity";

class StackValueObject implements StackModel {
  readonly id: string;
  readonly name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}

export { StackValueObject };
