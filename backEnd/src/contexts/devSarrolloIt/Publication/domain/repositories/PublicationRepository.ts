import { PublicationModel } from "../entities/PublicationEntity";
import { Publication } from "../valueObjects/Publication";


interface PublicationRepository {
    findAllPublication: () => Promise<Publication[] | null>
    save:(onePublication: Publication) => Promise<Publication | null>
    getPublicationsByUser:(id: string) => Promise<Publication[] | null>
    updatePublication:(publicationId:string, update: Publication ) => Promise<Publication> 
}

export {type PublicationRepository}