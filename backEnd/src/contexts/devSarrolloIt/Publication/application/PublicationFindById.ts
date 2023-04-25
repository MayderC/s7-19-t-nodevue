import { PublicationRepository } from "../domain/repositories/PublicationRepository";
import { Publication } from "../domain/valueObjects/Publication";


class PublicationFindById {
    constructor(private readonly publicationRepository: PublicationRepository){}

    async run(id: string): Promise<Publication | null> {
        return await this.publicationRepository.findPublicationById(id)
    }
}

export {PublicationFindById}