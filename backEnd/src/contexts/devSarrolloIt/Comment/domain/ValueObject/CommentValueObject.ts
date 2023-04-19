import { CommentEntity } from "../entities/CommentEntity";

class CommentValueObject implements CommentEntity{
    readonly id: string;
    readonly description: string;
    readonly publicationid: string;
    readonly userid: string;

    constructor(id: string, description: string, publicationid: string, userid: string){
        this.id = id ;
        this.description = description ;
        this.publicationid = publicationid ;
        this.userid = userid ;
    }
}

export { CommentValueObject }