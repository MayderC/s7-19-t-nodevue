import { MongoosePublicationModel } from "../../Publication/infrastructure/persistence/mongoose/MongoosePublicationModel";
import { CommentEntity } from "../domain/entities/CommentEntity";
import { CommentRepository } from "../domain/repository/CommentRepository";
import { MongooseCommentModel } from "./MongooseCommentModel";

class MongoRepositoryCommentImpl implements CommentRepository {
    async create(comment: CommentEntity): Promise<CommentEntity> {
        
        //Comprobar que la publicacion exista
        const publication = await MongoosePublicationModel.find({id: comment.publicationid})
        
        if (!publication[0]) return null
    
        const newComment = await MongooseCommentModel.create(comment) ;
        return newComment
    }

    async deleteOne(commentid: string, userid:string): Promise<boolean> {
        
        const comment = await MongooseCommentModel.findOne({id: commentid})
        
        if(comment.userid !== userid) return false
        
        const { deletedCount } = await MongooseCommentModel.deleteOne({ id: commentid})

        if( deletedCount === 1 ) return true

        return false
        
       
    }

}
export { MongoRepositoryCommentImpl }