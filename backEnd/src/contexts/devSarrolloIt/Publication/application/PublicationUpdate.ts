import { ForbiddenError } from "../../../shared/domain/errors/ForbiddenError";
import { PublicationRepository } from "../domain/repositories/PublicationRepository";
import { Publication } from "../domain/valueObjects/Publication";

class PublicationUpdate{
    constructor(private readonly publicationrepository: PublicationRepository) {}
    
    async run(publicationId:string, update: Publication): Promise<Publication>{
        
        const updatedPub = await this.publicationrepository.updatePublication(publicationId,update);

        if(!updatedPub) throw new ForbiddenError

        return updatedPub
    }
}

export {PublicationUpdate}