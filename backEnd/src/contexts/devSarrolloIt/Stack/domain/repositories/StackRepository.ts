import { StackModel } from "../estities/StackEntity";

interface StackRepository {
  create(stack: StackModel): Promise<StackModel>;
}

export { type StackRepository };
