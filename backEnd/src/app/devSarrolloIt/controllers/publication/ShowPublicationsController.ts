import type { Request, Response } from "express"

import { PublicationShower } from "../../../../contexts/devSarrolloIt/Publication/application/PublicationShower"
import type { PublicationRepository } from "../../../../contexts/devSarrolloIt/Publication/domain/repositories/PublicationRepository"
import { MongoosePublicationRepository } from "../../../../contexts/devSarrolloIt/Publication/infrastructure/persistence/mongoose/MongoosePublicationCategory"
import { HttpCode } from "../../../shared/HttpCode"

class ShowPublicationsController {
  private readonly publicationRepository: PublicationRepository
  private readonly publicationShower: PublicationShower

  constructor() {
    this.publicationRepository = new MongoosePublicationRepository()
    this.publicationShower = new PublicationShower(this.publicationRepository)
  }

  async run(req: Request, res: Response): Promise<void> {
    const data = await this.publicationShower.run(req.logedInUser?.id!)

    res.status(HttpCode.Ok).send(data)
  }
}

export { ShowPublicationsController }
