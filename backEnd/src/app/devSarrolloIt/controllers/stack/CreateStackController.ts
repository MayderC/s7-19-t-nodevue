import { Request, Response } from "express";
import { Types } from "mongoose";
import { CreateStackUseCase } from "../../../../contexts/devSarrolloIt/Stack/application/CreateStackUseCase";
import { StackRepository } from "../../../../contexts/devSarrolloIt/Stack/domain/repositories/StackRepository";
import { StackValueObject } from "../../../../contexts/devSarrolloIt/Stack/domain/valueObjects/StackValueObject";
import { MongoRepositoryStackImpl } from "../../../../contexts/devSarrolloIt/Stack/infrastructure/persistence/mongoose/MongoRepositoryStackImpl";
import { HttpCode } from "../../../shared/HttpCode";
import { MissingFieldsError } from "../../../../contexts/shared/domain/errors/MissingFieldsError";

class CreateStackController {
  private readonly _stackRepository: StackRepository;
  private readonly _createStackUseCase: CreateStackUseCase;

  constructor() {
    this._stackRepository = new MongoRepositoryStackImpl();
    this._createStackUseCase = new CreateStackUseCase(this._stackRepository);
  }

  async run(req: Request, res: Response): Promise<void> {
    const { name } = req.body;

    if (typeof name !== "string") throw new MissingFieldsError();

    const objectId = new Types.ObjectId();
    const stack = new StackValueObject(objectId.toString(), name.toLowerCase());

    const data = await this._createStackUseCase.run(stack);
    res.status(HttpCode.Created).json(data);
  }
}

export { CreateStackController };
