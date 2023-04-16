import { MatchEntity } from "../entities/MatchEntity";

interface MatchRepository {
    create(match: MatchEntity): Promise<MatchEntity>;
    findmatchbyuserid(userid: string): Promise<MatchEntity[]>;
}

export {type MatchRepository}