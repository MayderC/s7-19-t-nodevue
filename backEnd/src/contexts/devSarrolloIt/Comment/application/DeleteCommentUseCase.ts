import { CommentRepository } from "../domain/repository/CommentRepository";

class DeleteCommentUseCase {
    
    constructor(private readonly _commentrepository : CommentRepository){}

    async run(commentid: string, userid:string): Promise<boolean>{
        

        const deletedComment = await this._commentrepository.deleteOne(commentid,userid);
        
        if( deletedComment ) return true

        return false

    }
}

export {DeleteCommentUseCase}