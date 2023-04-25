import type { Request, Response } from "express"

import { MatchesShower  } from "../../../../contexts/devSarrolloIt/Match/application/MatchesShower"
import type { MatchRepository } from "../../../../contexts/devSarrolloIt/Match/domain/repository/MatchRepository"
import { MongoRepositoryMatchImpl } from "../../../../contexts/devSarrolloIt/Match/infrastructure/persistence/mongoose/MongoRepositoryMatchImpl"
import { MissingFieldsError } from "../../../../contexts/shared/domain/errors/MissingFieldsError"
import { HttpCode } from "../../../shared/HttpCode"

class ShowMatchsByProjectController {
  private readonly matchRepository: MatchRepository
  private readonly matchShower: MatchesShower

  constructor() {
    this.matchRepository = new MongoRepositoryMatchImpl()
    this.matchShower = new MatchesShower(this.matchRepository)
  }

  async run(req: Request, res: Response): Promise<void> {

    const service = await this.matchShower.run(req.logedInUser?.id!)

    res.status(HttpCode.Ok).send(service)
  }
}

export { ShowMatchsByProjectController }
