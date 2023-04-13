import { MatchEntity } from "../entities/MatchEntity";

class MatchValueObject implements MatchEntity{
    readonly id: string;
    readonly status: boolean;
    readonly solicitud: boolean;
    readonly userid: string;
    readonly publicationid: string;

    constructor(id: string,status: boolean,solicitud: boolean,userid: string,publicationid: string){
        this.id = id ;
        this.status = status ;
        this.solicitud = solicitud ;
        this.userid = userid ;
        this.publicationid = publicationid ;
    }
}

export { MatchValueObject }