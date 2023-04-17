import { Publication } from "../valueObjects/Publication";


interface PublicationRepository {
    findAllPublication: () => Promise<Publication[] | null>
    deleteOne: (id: string) => Promise<Publication | null>
}

export {type PublicationRepository}