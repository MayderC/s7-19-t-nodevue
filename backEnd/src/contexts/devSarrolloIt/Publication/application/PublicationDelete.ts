import { PublicationRepository } from "../domain/repositories/PublicationRepository";
import { Publication } from "../domain/valueObjects/Publication";



class PublicationDeleteOne {
    constructor(private readonly publicationRepository: PublicationRepository) { }

    async run(id: string): Promise<Publication | null> {
        return await this.publicationRepository.deleteOne(id)
    }
}

export { PublicationDeleteOne }