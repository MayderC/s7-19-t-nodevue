import { Publication } from "../valueObjects/Publication";


interface PublicationRepository {
    findAllPublication: () => Promise<Publication[] | null>
    deleteOne: (publication: string, userId: string) => Promise<void | null>
}

export {type PublicationRepository}