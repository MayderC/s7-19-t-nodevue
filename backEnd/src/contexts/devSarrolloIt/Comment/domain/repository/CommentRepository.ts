import { CommentEntity } from "../entities/CommentEntity"

interface CommentRepository {
    create(comment: CommentEntity):Promise<CommentEntity> ;
}

export { type CommentRepository }