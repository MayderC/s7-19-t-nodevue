import { StackModel } from "../estities/StackEntity";

interface StackRepository {
  create(stack: StackModel): Promise<StackModel>;
  findAllStack(name?: string): Promise<StackModel[]>;
}

export { type StackRepository };
