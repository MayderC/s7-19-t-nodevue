import { PublicationModel } from "../entities/PublicationEntity";


class Publication implements PublicationModel {
    constructor(
        readonly id: string,
        readonly title: string,
        readonly description: string,
        readonly status: boolean,
        readonly necessaryRoles: [],
        readonly stacks: [],
        readonly userId: string,
        readonly matchId: string,
    ) { }
}

export { Publication }