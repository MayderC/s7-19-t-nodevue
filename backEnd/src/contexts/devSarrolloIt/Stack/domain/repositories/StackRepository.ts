import { StackModel } from "../estities/StackEntity";

interface StackRepository {
  create(stack: StackModel): Promise<StackModel>;
  findAllStack(name?: string): Promise<StackModel[]>;
  findByNameStack(name: string): Promise<StackModel | null>;
}

export { type StackRepository };
