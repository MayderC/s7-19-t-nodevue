import { Request, Response } from "express";
import { PublicationDeleteOne } from "../../../../contexts/devSarrolloIt/Publication/application/PublicationDelete";
import { PublicationRepository } from "../../../../contexts/devSarrolloIt/Publication/domain/repositories/PublicationRepository";
import { MongoosePublicationRepository } from "../../../../contexts/devSarrolloIt/Publication/infrastructure/persistence/mongoose/MongoosePublicationCategory";
import { MissingFieldsError } from "../../../../contexts/shared/domain/errors/MissingFieldsError";
import { HttpCode } from "../../../shared/HttpCode";
import { UserFindById } from "../../../../contexts/devSarrolloIt/User/application/UserFindById";
import { UserDoesNotExistError } from "../../../../contexts/devSarrolloIt/User/domain/errors/UserDoesNotExistError";



class PublicationDeleteController {
    private readonly publicationRepository: PublicationRepository
    private readonly publicationDeleteOne: PublicationDeleteOne
    private readonly userFindById: UserFindById

    constructor() {
        this.publicationRepository = new MongoosePublicationRepository()
        this.publicationDeleteOne = new PublicationDeleteOne(this.publicationRepository)
    }

    async run(req: Request, res: Response): Promise<void | null> {
        const fields = req.params as { [key: string]: unknown }
        const { id } = fields
        const { userId } = req.body

        if (typeof id !== "string" || typeof userId !== "string") {
            throw new MissingFieldsError()
        }

        const isExist = await this.userFindById.run(userId)

        if(!isExist){
            throw new UserDoesNotExistError()
        }

        const data = await this.publicationDeleteOne.run(id, userId)
        if (data === undefined) {
            res.status(HttpCode.Ok).send({ msg: "publication removed successfully" })
        } else {
            res.status(HttpCode.NotFound).send({ msg: "category not found" })
        }
    }
}

export { PublicationDeleteController }