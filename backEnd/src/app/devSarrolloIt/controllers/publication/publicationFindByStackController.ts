import { Request, Response } from "express";
import { PublicationFindByStacks } from "../../../../contexts/devSarrolloIt/Publication/application/PublicationFindByStacks";
import { PublicationRepository } from "../../../../contexts/devSarrolloIt/Publication/domain/repositories/PublicationRepository";
import { MongoosePublicationRepository } from "../../../../contexts/devSarrolloIt/Publication/infrastructure/persistence/mongoose/MongoosePublicationCategory";
import { HttpCode } from "../../../shared/HttpCode";




class PublicationFindByStack {
    private readonly publicationRepository: PublicationRepository
    private readonly publicationFindAll: PublicationFindByStacks
    
    constructor() {
        this.publicationRepository = new MongoosePublicationRepository()
        this.publicationFindAll = new PublicationFindByStacks(this.publicationRepository)
    }

    async run( req: Request, res: Response): Promise<void> {
        const fields = req.body as { [key: string]: string }
        const { name } = fields
        const data = await this.publicationFindAll.run(name)
        res.status(HttpCode.Ok).send({data})
    }
}

export {PublicationFindByStack}