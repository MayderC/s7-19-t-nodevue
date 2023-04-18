import type {MatchRepository} from "../domain/repository/MatchRepository"

class MatchesShower {
  constructor(private readonly userRepository: MatchRepository) {}

  async run(id: string): Promise<any[]> {
    const servicesFound = await this.userRepository.getAllRequestsOfProject(id)

    return servicesFound;
  }
}

export { MatchesShower }
