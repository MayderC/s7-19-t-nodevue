import { MongoosePublicationModel } from "../../Publication/infrastructure/persistence/mongoose/MongoosePublicationModel";
import { CommentEntity } from "../domain/entities/CommentEntity";
import { CommentRepository } from "../domain/repository/CommentRepository";
import { MongooseCommentModel } from "./MongooseCommentModel";

class MongoRepositoryCommentImpl implements CommentRepository {
    async create(comment: CommentEntity): Promise<CommentEntity> {
        
        //Comprobar que la publicacion exista
        const publication = await MongoosePublicationModel.find({id: comment.publicationid})
        console.log(publication)
        if (!publication[0]) return null
    
        const newComment = await MongooseCommentModel.create(comment) ;
        return newComment
    }

}
export { MongoRepositoryCommentImpl }