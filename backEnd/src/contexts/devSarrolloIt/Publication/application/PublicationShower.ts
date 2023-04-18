import { PublicationDoesNotExistError } from "../domain/errors/PublicationDoesNotExistError"
import type { PublicationRepository } from "../domain/repositories/PublicationRepository"
import { Publication } from "../domain/valueObjects/Publication"


class PublicationShower {
  constructor(private readonly profileRepository: PublicationRepository) {}

  async run(id: string): Promise<Publication[]> {
    const publications = await this.profileRepository.getPublicationsByUser(id)

    if (!publications) {
      throw new PublicationDoesNotExistError()
    }

    return publications
  }
}

export { PublicationShower }
