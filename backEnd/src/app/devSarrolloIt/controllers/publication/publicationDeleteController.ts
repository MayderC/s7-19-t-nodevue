import { Request, Response } from "express";
import { PublicationDeleteOne } from "../../../../contexts/devSarrolloIt/Publication/application/PublicationDelete";
import { PublicationRepository } from "../../../../contexts/devSarrolloIt/Publication/domain/repositories/PublicationRepository";
import { MongoosePublicationRepository } from "../../../../contexts/devSarrolloIt/Publication/infrastructure/persistence/mongoose/MongoosePublicationCategory";
import { MissingFieldsError } from "../../../../contexts/shared/domain/errors/MissingFieldsError";
import { HttpCode } from "../../../shared/HttpCode";
import { UserFindById } from "../../../../contexts/devSarrolloIt/User/application/UserFindById";
import { UserDoesNotExistError } from "../../../../contexts/devSarrolloIt/User/domain/errors/UserDoesNotExistError";
import { UserRepository } from "../../../../contexts/devSarrolloIt/User/domain/repositories/UserRepository";
import { MongooseUserRepository } from "../../../../contexts/devSarrolloIt/User/infrastructure/persistence/mongoose/MongooseUserRepository";
import { PublicationFindById } from "../../../../contexts/devSarrolloIt/Publication/application/PublicationFindById";




class PublicationDeleteController {
    private readonly publicationRepository: PublicationRepository
    private readonly publicationDeleteOne: PublicationDeleteOne
    private readonly publicationFindById: PublicationFindById
    private readonly userRepository: UserRepository
    private readonly userFindById: UserFindById

    constructor() {
        this.publicationRepository = new MongoosePublicationRepository()
        this.publicationDeleteOne = new PublicationDeleteOne(this.publicationRepository)
        this.publicationFindById = new PublicationFindById(this.publicationRepository)
        this.userRepository = new MongooseUserRepository()
        this.userFindById = new UserFindById(this.userRepository)
    }

    async run(req: Request, res: Response): Promise<void | null> {

        const fields = req.params as { [key: string]: unknown }
        const { id } = fields
        const userId = req.logedInUser?.id!

        if (typeof id !== "string" ) {
            throw new MissingFieldsError()
        }

        // const isExist = await this.userFindById.run(userId)

        // if (!isExist) {
        //     throw new UserDoesNotExistError()
        // }

        const publication = await this.publicationFindById.run(id)

        if(!publication){ 
            res.status(HttpCode.NotFound).send({ msg: "publication not found" }) 
            
        }

        if (publication.userId === userId) {

            const data = await this.publicationDeleteOne.run(id)

            res.status(HttpCode.Ok).send({ msg: "publication removed successfully" })

        } else {
            res.status(HttpCode.NotFound).send({ msg: "the user did not create the post" })
        }
    }
}

export { PublicationDeleteController }