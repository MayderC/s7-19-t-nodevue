import { PublicationRepository } from "../../../domain/repositories/PublicationRepository";
import { Publication } from "../../../domain/valueObjects/Publication";
import { MongoosePublicationModel } from "./MongoosePublicationModel";



class MongoosePublicationRepository implements PublicationRepository {

    async getPublicationsByName(name: string): Promise<Publication[]> {
        const publications: Publication[] | null = await MongoosePublicationModel.find({ stacks: { $in: [name] } });
        if (publications.length == 0) return null
        return this.getAllPublication(...publications)
    }

    async findAllPublication(): Promise<Publication[]> {
        const publicationAll: Publication[] | null = await MongoosePublicationModel.find({})

        if (!publicationAll) {
            return null
        }

        return this.getAllPublication(...publicationAll)
    }

    async save(onePublication: Publication): Promise<Publication | null> {
        const nameExist = await MongoosePublicationModel.findOne({ title: onePublication.title })
        if (nameExist) return null
        const publication = new MongoosePublicationModel(onePublication)
        const savedPublication: Publication = await publication.save()
        const { id, description, necessaryRoles, stacks, status, title, userId } = savedPublication
        return new Publication(id, title, description, status, necessaryRoles, stacks, userId)
    }

    async getPublicationsByUser(id: string): Promise<Publication[]> {
        const publications: Publication[] | null = await MongoosePublicationModel.find({ userId: id })
        if (!publications) return null
        return this.getAllPublication(...publications)
    }

    private getAllPublication(...MongoosePublicationModel: Publication[]): Publication[] {
        return MongoosePublicationModel.map(
            (publicationdb: Publication) =>
                new Publication(publicationdb.id, publicationdb.title, publicationdb.description, publicationdb.status, publicationdb.necessaryRoles, publicationdb.stacks, publicationdb.userId)
        )
    }

    async updatePublication(publicationId: string, update: Publication): Promise<Publication> {

        const originalPub = await MongoosePublicationModel.where({ id: publicationId }).findOne()

        if (originalPub.userId !== update.userId) { return null }

        const filter = { id: publicationId };

        const changes = { title: update.title, description: update.description, status: update.status, necessaryRoles: update.necessaryRoles, stacks: update.stacks, userId: update.userId }

        const updatedPub = await MongoosePublicationModel.findOneAndUpdate(filter, changes, { new: true })

        return updatedPub
    }

    async deleteOne(publication: string): Promise<Publication> {
        const data = await MongoosePublicationModel.deleteOne({ _id: publication })        
        if (data.deletedCount === 1) return null
    }

    async findPublicationById(id: string): Promise<Publication>{
        const data = await MongoosePublicationModel.findById(id)
        return data
    }
}

export { MongoosePublicationRepository }