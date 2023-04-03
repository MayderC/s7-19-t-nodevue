import { StackModel } from "../../../domain/estities/StackEntity";
import { StackRepository } from "../../../domain/repositories/StackRepository";
import { StackValueObject } from "../../../domain/valueObjects/StackValueObject";
import { MongooseStackModel } from "./MongooseCategoryModel";

class MongoRepositoryStackImpl implements StackRepository {
  async findByNameStack(name: string): Promise<StackModel | null> {
    const stack = await MongooseStackModel.findOne({ name });

    if (!stack) return null;

    return stack;
  }
  async create(stack: StackModel): Promise<StackModel> {
    const newStack: StackModel = await MongooseStackModel.create(stack);

    const { id, name } = newStack;

    return new StackValueObject(id, name);
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

    const stackArray = stack.map((stack) => {
      const nuwStack: StackModel = {
        id: stack.id,
        name: stack.name,
      };

      return nuwStack;
    });

    return stackArray;
  }
}

export { MongoRepositoryStackImpl };
