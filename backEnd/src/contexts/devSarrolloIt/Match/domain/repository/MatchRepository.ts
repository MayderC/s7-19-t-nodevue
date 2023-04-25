import { MatchEntity } from "../entities/MatchEntity";

interface MatchRepository {
    create(match: MatchEntity): Promise<MatchEntity>;
    findmatchbyuserid(userid: string): Promise<MatchEntity[]>;
    getAllRequestsOfProject:(id: string) => Promise<any[]>
    // findAllProjectAcepted:(userId: string) => Promise<any[]>
}

export {type MatchRepository}