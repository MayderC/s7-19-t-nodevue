import { Request, Response } from "express";
import { PublicationFinderAll } from "../../../../contexts/devSarrolloIt/Publication/application/PublicationFinderAll";
import { PublicationRepository } from "../../../../contexts/devSarrolloIt/Publication/domain/repositories/PublicationRepository";
import { MongoosePublicationRepository } from "../../../../contexts/devSarrolloIt/Publication/infrastructure/persistence/mongoose/MongoosePublicationCategory";
import { HttpCode } from "../../../shared/HttpCode";




class PublicationFindAllController {
    private readonly publicationRepository: PublicationRepository
    private readonly publicationFindAll: PublicationFinderAll
    
    constructor() {
        this.publicationRepository = new MongoosePublicationRepository()
        this.publicationFindAll = new PublicationFinderAll(this.publicationRepository)
    }

    async run( req: Request, res: Response): Promise<void> {
        const data = await this.publicationFindAll.run()
        res.status(HttpCode.Ok).send({data})
    }
}

export {PublicationFindAllController}