import { Request, Response } from "express";
import { FindAllStackUseCase } from "../../../../contexts/devSarrolloIt/Stack/application/FindAllStackUseCase";
import { StackRepository } from "../../../../contexts/devSarrolloIt/Stack/domain/repositories/StackRepository";
import { MongoRepositoryStackImpl } from "../../../../contexts/devSarrolloIt/Stack/infrastructure/persistence/mongoose/MongoRepositoryStackImpl";
import { HttpCode } from "../../../shared/HttpCode";

interface Query {
  name: string;
}

class FindAllStackController {
  private readonly _findAllStackUseCase: FindAllStackUseCase;
  private readonly _stackRepository: StackRepository;

  constructor() {
    this._stackRepository = new MongoRepositoryStackImpl();
    this._findAllStackUseCase = new FindAllStackUseCase(this._stackRepository);
  }

  async run(req: Request, res: Response): Promise<void> {
    const { name } = req.query as unknown as Query;

    const data = await this._findAllStackUseCase.run(name);

    res.status(HttpCode.Ok).json(data);
  }
}

export { FindAllStackController };
