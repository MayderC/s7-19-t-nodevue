import { Request, Response } from "express";
import { PublicationFindAllComments } from "../../../../contexts/devSarrolloIt/Publication/application/PublicationFindAllCommets";
import { PublicationRepository } from "../../../../contexts/devSarrolloIt/Publication/domain/repositories/PublicationRepository";
import { MongoosePublicationRepository } from "../../../../contexts/devSarrolloIt/Publication/infrastructure/persistence/mongoose/MongoosePublicationCategory";
import { MissingFieldsError } from "../../../../contexts/shared/domain/errors/MissingFieldsError"
import { HttpCode } from "../../../shared/HttpCode";




class PublicationFindAllCommentsControllers {
    private readonly publicationRepository: PublicationRepository
    private readonly publicationFindAll: PublicationFindAllComments
    
    constructor() {
        this.publicationRepository = new MongoosePublicationRepository()
        this.publicationFindAll = new PublicationFindAllComments(this.publicationRepository)
    }

    async run( req: Request, res: Response): Promise<void> {
        const fields = req.params as { [key: string]: unknown }
        const { id } = fields
        if (typeof id !== "string") {
          throw new MissingFieldsError()
        }
        const data = await this.publicationFindAll.run(id)
        res.status(HttpCode.Ok).send({data})
    }
}

export {PublicationFindAllCommentsControllers}