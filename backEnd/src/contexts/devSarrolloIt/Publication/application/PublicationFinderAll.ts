import { PublicationRepository } from "../domain/repositories/PublicationRepository";
import { Publication } from "../domain/valueObjects/Publication";



class PublicationFinderAll {
    constructor(private readonly publicationRepository: PublicationRepository){}

    async run(): Promise<Publication[]> {
        const publicationsFound = await this.publicationRepository.findAllPublication()

        if(!publicationsFound){
            throw new Error
        }

        return publicationsFound
    }
}

export {PublicationFinderAll}