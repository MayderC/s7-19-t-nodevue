import { MatchEntity } from "../domain/entities/MatchEntity";
import { MatchRepository } from "../domain/repository/MatchRepository";


class CreateMatchUseCase{
    private _matchrepository: MatchRepository ;

    constructor(matchRepository: MatchRepository ){
        this._matchrepository = matchRepository
    }

    async run(match: MatchEntity): Promise<MatchEntity>{
        const newMatch = await this._matchrepository.create(match) ;
        return newMatch
    }
}

export { CreateMatchUseCase } ;