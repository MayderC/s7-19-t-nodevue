import { StackModel } from "../../../domain/estities/StackEntity";
import { StackRepository } from "../../../domain/repositories/StackRepository";
import { MongooseStackModel } from "./MongooseCategoryModel";

class MongoRepositoryStackImpl implements StackRepository {
  async create(stack: StackModel): Promise<StackModel> {
    const newStack: StackModel = await MongooseStackModel.create(stack);

    return newStack;
  }
}

export { MongoRepositoryStackImpl };
