import { Request, Response } from "express";
import { DeleteCommentUseCase } from "../../../../contexts/devSarrolloIt/Comment/application/DeleteCommentUseCase";
import { CommentRepository } from "../../../../contexts/devSarrolloIt/Comment/domain/repository/CommentRepository";
import { MongoRepositoryCommentImpl } from "../../../../contexts/devSarrolloIt/Comment/infrastructure/MongoRepositoryCommentImpl";
import { MongooseCommentModel } from "../../../../contexts/devSarrolloIt/Comment/infrastructure/MongooseCommentModel";
import { HttpCode } from "../../../shared/HttpCode";

class DeleteCommentController{
    private readonly _commentrepository : CommentRepository ;
    private readonly commentusecase : DeleteCommentUseCase ;

    constructor(){
        this._commentrepository = new MongoRepositoryCommentImpl() ;
        this.commentusecase = new DeleteCommentUseCase(this._commentrepository)
    }

    async run(req: Request, res: Response): Promise<void>{
        const { id } = req.params 

        const deletecomment = await this.commentusecase.run(id,req.logedInUser?.id!) ;

        if (deletecomment === true) {
            res.status(HttpCode.Ok).send({ msg: "Comment removed successfully" })
          } else {
            res.status(HttpCode.Forbidden).send({ msg: "Not possible to remove" })
          }
    }
}

export {DeleteCommentController}