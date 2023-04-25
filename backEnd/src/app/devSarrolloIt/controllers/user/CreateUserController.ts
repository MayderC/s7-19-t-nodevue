import { hash } from "bcrypt"
import type { Request, Response } from "express"
import { Types } from "mongoose"

import { UserCreator } from "../../../../contexts/devSarrolloIt/User/application/UserCreator"
import type { UserRepository } from "../../../../contexts/devSarrolloIt/User/domain/repositories/UserRepository"
import { User } from "../../../../contexts/devSarrolloIt/User/domain/valueObjects/User"
import { MongooseUserRepository } from "../../../../contexts/devSarrolloIt/User/infrastructure/persistence/mongoose/MongooseUserRepository"
import { MissingFieldsError } from "../../../../contexts/shared/domain/errors/MissingFieldsError"
import { HttpCode } from "../../../shared/HttpCode"
import { SALT_ROUNDS } from "../../shared/constants"

class CreateUserController {
  private readonly userRepository: UserRepository
  private readonly userCreator: UserCreator

  constructor() {
    this.userRepository = new MongooseUserRepository()
    this.userCreator = new UserCreator(this.userRepository)
  }

  async run(req: Request, res: Response): Promise<void> {
    const fields = req.body //as { [key: string]: unknown }
    const { name, email, password, roleId, stackId } = fields
    

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof password !== "string" 
      // ||
      // roleid.length == 0 ||
      // stackid.length == 0
    ) {
      throw new MissingFieldsError()
    }

    const hashPassword = await hash(password, SALT_ROUNDS)

    const objectId = new Types.ObjectId()

    const user = new User(objectId.toString(), name, email, hashPassword, roleId, stackId)

    await this.userCreator.run(user)

    res.status(HttpCode.Created).send({ user })
  }
}

export { CreateUserController }
