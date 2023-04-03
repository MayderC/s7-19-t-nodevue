import { StackAlreadyExistsError } from "../domain/errors/StackAlreadyExistsError";
import { StackModel } from "../domain/estities/StackEntity";
import { StackRepository } from "../domain/repositories/StackRepository";

class CreateStackUseCase {
  private _stackRepository: StackRepository;

  constructor(stackRepository: StackRepository) {
    this._stackRepository = stackRepository;
  }

  async run(stack: StackModel): Promise<StackModel> {
    const findStack = await this._stackRepository.findByNameStack(stack.name);

    if (findStack) throw new StackAlreadyExistsError();

    const newStack = await this._stackRepository.create(stack);

    return newStack;
  }
}

export { CreateStackUseCase };
