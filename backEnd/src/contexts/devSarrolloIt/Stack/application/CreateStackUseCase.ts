import { StackModel } from "../domain/estities/StackEntity";
import { StackRepository } from "../domain/repositories/StackRepository";

class CreateStackUseCase {
  private _stackRepository: StackRepository;

  constructor(stackRepository: StackRepository) {
    this._stackRepository = stackRepository;
  }

  async run(stack: StackModel): Promise<StackModel> {
    const newStack = await this._stackRepository.create(stack);

    return newStack;
  }
}

export { CreateStackUseCase };
