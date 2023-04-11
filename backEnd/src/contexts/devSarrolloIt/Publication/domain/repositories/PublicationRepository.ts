import { PublicationModel } from "../entities/PublicationEntity";
import { Publication } from "../valueObjects/Publication";


interface PublicationRepository {
    findAllPublication: () => Promise<Publication[] | null>
}

export {type PublicationRepository}