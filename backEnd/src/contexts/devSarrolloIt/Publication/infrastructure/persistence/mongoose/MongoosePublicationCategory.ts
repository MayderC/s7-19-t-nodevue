import { PublicationRepository } from "../../../domain/repositories/PublicationRepository";
import { Publication } from "../../../domain/valueObjects/Publication";
import { MongoosePublicationModel } from "./MongoosePublicationModel";



class MongoosePublicationRepository implements PublicationRepository {
    async findAllPublication(): Promise<Publication[]> {
        const publicationAll: Publication[] | null = await MongoosePublicationModel.find({})

        if (!publicationAll) {
            return null
        }

        return this.getAllPublication(...publicationAll)
    }

    async save(onePublication: Publication): Promise<Publication | null> {
       const nameExist = await MongoosePublicationModel.findOne({title: onePublication.title})
       if (nameExist) return null
       const publication = new MongoosePublicationModel(onePublication)
       const savedPublication: Publication = await publication.save()
       const {id, description, necessaryRoles, stacks, status, title, userId} = savedPublication
       return new Publication(id, title, description, status, necessaryRoles, stacks, userId)
    }


    getAllPublication(...MongoosePublicationModel: Publication[]): Publication[] {
        return MongoosePublicationModel.map(
            (publicationdb: Publication) =>
                new Publication(publicationdb.id, publicationdb.title, publicationdb.description, publicationdb.status, publicationdb.necessaryRoles, publicationdb.stacks, publicationdb.userId)
        )
    }
}

export { MongoosePublicationRepository }