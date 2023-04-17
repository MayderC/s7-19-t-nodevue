import type { Request, Response } from "express"
import { Types } from "mongoose"

import { PublicationCreator } from "../../../../contexts/devSarrolloIt/Publication/application/PublicationCreator"
import type { PublicationRepository } from "../../../../contexts/devSarrolloIt/Publication/domain/repositories/PublicationRepository"
import { Publication } from "../../../../contexts/devSarrolloIt/Publication/domain/valueObjects/Publication"
import { MongoosePublicationRepository } from "../../../../contexts/devSarrolloIt/Publication/infrastructure/persistence/mongoose/MongoosePublicationCategory"
import { MissingFieldsError } from "../../../../contexts/shared/domain/errors/MissingFieldsError"
import { HttpCode } from "../../../shared/HttpCode"

class CreatePublicationController {
  private readonly publicationRepository: PublicationRepository
  private readonly publicationCreator: PublicationCreator

  constructor() {
    this.publicationRepository = new MongoosePublicationRepository()
    this.publicationCreator = new PublicationCreator(this.publicationRepository)
  }

  async run(req: Request, res: Response): Promise<void> {
    const fields = req.body as { [key: string]: unknown }
    const { title, description, status } = fields

    if (
      typeof title !== "string" ||
      typeof description !== "string" ||
      typeof status !== "boolean"
    ) {
      throw new MissingFieldsError()
    }

    const objectId = new Types.ObjectId()
    const onePublication = new Publication(objectId.toString(), title, description, status, req.body.rols, req.body.stacks, req.logedInUser?.id!)

    await this.publicationCreator.run(onePublication)

    res.status(HttpCode.Created).send({ onePublication })
  }
}

export { CreatePublicationController }
