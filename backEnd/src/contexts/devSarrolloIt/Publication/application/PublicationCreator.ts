import { PublicationAlreadyExistsError } from "../domain/errors/PublicationAlreadyExistsError"
import type { PublicationRepository } from "../domain/repositories/PublicationRepository"
import type { Publication } from "../domain/valueObjects/Publication"

class PublicationCreator {
  constructor(private readonly publicationRepository: PublicationRepository) {}

  async run(publication: Publication): Promise<Publication> {
    const onePublication = await this.publicationRepository.save(publication)

    if (!onePublication) {
      throw new PublicationAlreadyExistsError()
    }

    return onePublication
  }
}

export { PublicationCreator }
