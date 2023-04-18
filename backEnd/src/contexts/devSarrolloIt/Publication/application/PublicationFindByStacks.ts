import { PublicationRepository } from "../domain/repositories/PublicationRepository";
import { Publication } from "../domain/valueObjects/Publication";



class PublicationFindByStacks {
    constructor(private readonly publicationRepository: PublicationRepository){}

    async run(name: string): Promise<Publication[]> {
        const publicationsFound = await this.publicationRepository.getPublicationsByName(name)

        if(!publicationsFound){
            throw new Error(`error, publications with this technology ${name}, do not exist`)
        }

        return publicationsFound
    }
}

export {PublicationFindByStacks}