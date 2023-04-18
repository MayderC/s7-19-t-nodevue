import { Request, Response } from "express";
import { Types } from "mongoose";
import { CreateCommentUseCase } from "../../../../contexts/devSarrolloIt/Comment/application/CreateCommentUseCase";
import { CommentRepository } from "../../../../contexts/devSarrolloIt/Comment/domain/repository/CommentRepository";
import { MongoRepositoryCommentImpl } from "../../../../contexts/devSarrolloIt/Comment/infrastructure/MongoRepositoryCommentImpl";
import { MissingFieldsError } from "../../../../contexts/shared/domain/errors/MissingFieldsError";
import { CommentValueObject } from "../../../../contexts/devSarrolloIt/Comment/domain/ValueObject/CommentValueObject";
import { HttpCode } from "../../../shared/HttpCode";

class CreateCommentController {
    private readonly _commentrepository: CommentRepository;
    private readonly commentusecase: CreateCommentUseCase;

    constructor(){
        this._commentrepository = new MongoRepositoryCommentImpl();
        this.commentusecase = new CreateCommentUseCase(this._commentrepository)  
    }

    async run(req: Request, res:Response): Promise<void>{
        const { description , publicationid } = req.body

        if (
            typeof description !== "string" ||
            typeof publicationid !== "string"
          ) {
            throw new MissingFieldsError()
        }

        const objectId = new Types.ObjectId()

        const comment = new CommentValueObject(objectId.toString(), description, publicationid, req.logedInUser?.id!)

        const data = await this.commentusecase.run(comment) ;

        res.status(HttpCode.Created).send(data)
    }
}

export { CreateCommentController }