import { MatchEntity } from "../entities/MatchEntity";

interface MatchRepository {
    create(match: MatchEntity): Promise<MatchEntity>;
}

export {type MatchRepository}