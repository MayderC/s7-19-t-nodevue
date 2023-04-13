import { MatchEntity } from "../../../domain/entities/MatchEntity";
import { MatchRepository } from "../../../domain/repository/MatchRepository";
import { MoongoseMatchModel } from "./MongooseMatchModel";

class MongoRepositoryMatchImpl implements MatchRepository{
    async create(match: MatchEntity): Promise<MatchEntity> {
        const newMatch = await MoongoseMatchModel.create(match);
        return newMatch
    }
}

export { MongoRepositoryMatchImpl }