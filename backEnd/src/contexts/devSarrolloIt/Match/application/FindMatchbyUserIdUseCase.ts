import { MatchEntity } from "../domain/entities/MatchEntity";
import { MatchRepository } from "../domain/repository/MatchRepository";

class FindMatchbyUserIdUseCase {
    private readonly _matchrepository: MatchRepository

    constructor(matchrepository: MatchRepository){
        this._matchrepository = matchrepository
    }

    async run(userid: string): Promise<MatchEntity[]>{
        const match = await this._matchrepository.findmatchbyuserid(userid) ;
        return match
    }

}

export { FindMatchbyUserIdUseCase }