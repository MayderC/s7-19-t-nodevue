import { StackModel } from "../../../domain/estities/StackEntity";
import { StackRepository } from "../../../domain/repositories/StackRepository";
import { MongooseStackModel } from "./MongooseCategoryModel";

class MongoRepositoryStackImpl implements StackRepository {
  async create(stack: StackModel): Promise<StackModel> {
    const newStack: StackModel = await MongooseStackModel.create(stack);

    return newStack;
  }

  async findAllStack(name?: string): Promise<StackModel[]> {
    let stack: StackModel[];

    if (name) {
      stack = await MongooseStackModel.find({
        $or: [{ name: { $regex: name, $options: "i" } }],
      });
    } else {
      stack = await MongooseStackModel.find({});
    }

    return stack;
  }
}

export { MongoRepositoryStackImpl };
