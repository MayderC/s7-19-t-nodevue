import { Publication } from "../valueObjects/Publication";


interface PublicationRepository {
    findAllPublication: () => Promise<Publication[] | null>
    save:(onePublication: Publication) => Promise<Publication | null>
    getPublicationsByUser:(id: string) => Promise<Publication[] | null>
    updatePublication:(publicationId:string, update: Publication ) => Promise<Publication>
    getPublicationsByName:(name: string) => Promise<Publication[] | null>
    deleteOne:(id: string) => Promise<Publication | null>
    findPublicationById:(id: string) => Promise<Publication | null> 
}

export {type PublicationRepository}