import { PublicationRepository } from "../domain/repositories/PublicationRepository";
import { Publication } from "../domain/valueObjects/Publication";



class PublicationFindAllComments {
    constructor(private readonly publicationRepository: PublicationRepository){}

    async run(id: string): Promise<Publication[]> {
        const publicationsFound = await this.publicationRepository.getAllCommentsByPublication(id)

        if(!publicationsFound){
            throw new Error(`error, publications with this id: ${id}, do not exist`)
        }

        return publicationsFound
    }
}

export {PublicationFindAllComments}