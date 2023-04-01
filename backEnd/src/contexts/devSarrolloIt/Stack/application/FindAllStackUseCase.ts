import { StackRepository } from "../domain/repositories/StackRepository";
import { StackModel } from "../domain/estities/StackEntity";

class FindAllStackUseCase {
  private _stackRepository: StackRepository;

  constructor(stackRepository: StackRepository) {
    this._stackRepository = stackRepository;
  }

  async run(name?: string): Promise<StackModel[]> {
    const stack = await this._stackRepository.findAllStack(name);

    return stack;
  }
}

export { FindAllStackUseCase };
