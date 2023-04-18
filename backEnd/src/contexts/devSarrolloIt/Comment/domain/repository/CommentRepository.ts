import { CommentEntity } from "../entities/CommentEntity"

interface CommentRepository {
    create(comment: CommentEntity):Promise<CommentEntity> ;
    deleteOne(commentid: string, userid:string): Promise<boolean> ;
}

export { type CommentRepository }