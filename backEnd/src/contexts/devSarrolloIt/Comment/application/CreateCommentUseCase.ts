import { Request, Response } from "express";
import { CommentRepository } from "../domain/repository/CommentRepository";
import { CommentEntity } from "../domain/entities/CommentEntity";
import { PublicationDoesNotExistCommentError } from "../domain/erros/PublicationdoesnotexistComment";

class CreateCommentUseCase {
    private readonly _commentrepository: CommentRepository;

    constructor(commentrepository: CommentRepository){
        this._commentrepository = commentrepository ;
    }

    async run(comment: CommentEntity): Promise<CommentEntity>{
        const newComment = await this._commentrepository.create(comment) ;

        if(!newComment) { throw new PublicationDoesNotExistCommentError}

        return newComment
    }
}

export { CreateCommentUseCase }