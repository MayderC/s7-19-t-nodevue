import { PublicationRepository } from "../domain/repositories/PublicationRepository";



class PublicationDeleteOne {
    constructor(private readonly publicationRepository: PublicationRepository) { }

    async run(id: string, userId: string): Promise<void | null> {
        return await this.publicationRepository.deleteOne(id, userId)
    }
}

export { PublicationDeleteOne }