import { Request, Response} from 'express'
import { PublicationUpdate } from "../../../../contexts/devSarrolloIt/Publication/application/PublicationUpdate"
import { PublicationRepository } from "../../../../contexts/devSarrolloIt/Publication/domain/repositories/PublicationRepository"
import { MongoosePublicationRepository } from "../../../../contexts/devSarrolloIt/Publication/infrastructure/persistence/mongoose/MongoosePublicationCategory"
import { MissingFieldsError } from '../../../../contexts/shared/domain/errors/MissingFieldsError'
import { Publication } from '../../../../contexts/devSarrolloIt/Publication/domain/valueObjects/Publication'
import { HttpCode } from '../../../shared/HttpCode'
import { ForbiddenError } from '../../../../contexts/shared/domain/errors/ForbiddenError'

class UpdatePublicationController {
    private readonly publicationRepository: PublicationRepository
    private readonly publicationUpdate: PublicationUpdate
    
    constructor() {
        this.publicationRepository = new MongoosePublicationRepository()
        this.publicationUpdate = new PublicationUpdate(this.publicationRepository)
    }


    async run(req: Request , res: Response): Promise<void> {
        const {publicationid} = req.params

        const fields = req.body as { [key: string]: unknown }
        const { title, description, status } = fields
    
        if (
          typeof title !== "string" ||
          typeof description !== "string" ||
          typeof status !== "boolean"
        ) {
          throw new MissingFieldsError()
        }
    
        const toUpdate = new Publication(publicationid, title, description, status, req.body.rols, req.body.stacks, req.logedInUser?.id!)

        const updated = await this.publicationUpdate.run(publicationid,toUpdate) ;

        res.status(HttpCode.Created).send(updated) 

    }
}

export { UpdatePublicationController}