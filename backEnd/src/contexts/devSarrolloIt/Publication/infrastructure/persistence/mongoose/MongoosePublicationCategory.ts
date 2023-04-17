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

    getAllPublication(...MongoosePublicationModel: Publication[]): Publication[] {
        return MongoosePublicationModel.map(
            (publicationdb: Publication) =>
                new Publication(publicationdb.id, publicationdb.title, publicationdb.description, publicationdb.status, publicationdb.necessaryRoles, publicationdb.stacks, publicationdb.userId, publicationdb.matchId)
        )
    }

    async deleteOne(publication: string): Promise<Publication> {
        console.log(publication)
        const data = await MongoosePublicationModel.deleteOne({ _id: publication })
        console.log(data)
        const { deletedCount } = await MongoosePublicationModel.deleteOne({ id: publication })
        console.log(deletedCount)
        if (deletedCount === 0) return null
    }
}

export { MongoosePublicationRepository }