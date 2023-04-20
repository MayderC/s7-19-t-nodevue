import { Request, Response } from "express";
import { PublicationFindById } from "../../../../contexts/devSarrolloIt/Publication/application/PublicationFindById";
import { PublicationRepository } from "../../../../contexts/devSarrolloIt/Publication/domain/repositories/PublicationRepository";
import { MongoosePublicationRepository } from "../../../../contexts/devSarrolloIt/Publication/infrastructure/persistence/mongoose/MongoosePublicationCategory";
import { MissingFieldsError } from "../../../../contexts/shared/domain/errors/MissingFieldsError";
import { HttpCode } from "../../../shared/HttpCode";




class PublicationFindOneController {
    private readonly publicationRepository: PublicationRepository
    private readonly publicationFindById: PublicationFindById

    constructor() {
        this.publicationRepository = new MongoosePublicationRepository()
        this.publicationFindById = new PublicationFindById(this.publicationRepository)
    }

    async run(req: Request, res: Response): Promise<void | null> {
        const fields = req.params as { [key: string]: unknown }
        const { id } = fields

        if (typeof id !== "string") {
            throw new MissingFieldsError()
        }

        const isPublication = await this.publicationFindById.run(id)

        if (isPublication) {
            res.status(HttpCode.Ok).send(isPublication)
        } else {
            res.status(HttpCode.NotFound).send({ msg: "publication not found" })
        }
    }
}

export { PublicationFindOneController }