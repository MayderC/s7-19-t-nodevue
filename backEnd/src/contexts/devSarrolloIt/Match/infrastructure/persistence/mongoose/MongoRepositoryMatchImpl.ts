import { MatchEntity } from "../../../domain/entities/MatchEntity";
import { MatchRepository } from "../../../domain/repository/MatchRepository";
import { MoongoseMatchModel } from "./MongooseMatchModel";

class MongoRepositoryMatchImpl implements MatchRepository{
    async create(match: MatchEntity): Promise<MatchEntity> {
        const newMatch = await MoongoseMatchModel.create(match);
        return newMatch
    }
    
    async findmatchbyuserid(userid: string): Promise<MatchEntity[]> {
        const matchresult = await MoongoseMatchModel.find({userid: userid})

        return matchresult
    }
}

export { MongoRepositoryMatchImpl }