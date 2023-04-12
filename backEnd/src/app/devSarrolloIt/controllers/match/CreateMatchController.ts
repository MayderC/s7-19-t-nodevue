import { Request, Response } from "express";
import { MatchRepository } from "../../../../contexts/devSarrolloIt/Match/domain/repository/MatchRepository";
import { CreateMatchUseCase } from "../../../../contexts/devSarrolloIt/Match/application/CreateMatchUseCase";
import { MongoRepositoryMatchImpl } from "../../../../contexts/devSarrolloIt/Match/infrastructure/persistence/mongoose/MongoRepositoryMatchImpl";
import { MissingFieldsError } from "../../../../contexts/shared/domain/errors/MissingFieldsError";
import { Types } from "mongoose";
import { MatchValueObject } from "../../../../contexts/devSarrolloIt/Match/domain/ValueObjects/MatchValueObject";
import { HttpCode } from "../../../shared/HttpCode";

class CreateMatchController {
    private readonly _matchrepository: MatchRepository;
    private readonly _matchcreateusecase: CreateMatchUseCase ;

    constructor(){
        this._matchrepository = new MongoRepositoryMatchImpl();
        this._matchcreateusecase = new CreateMatchUseCase(this._matchrepository) ;
    }

    async run(req: Request, res: Response): Promise<void>{
        const { userid, publicationid} = req.body ;

        if (typeof userid !== 'string' ||
            typeof publicationid !== 'string'){
                throw new MissingFieldsError
        } 

        const objectId = new Types.ObjectId();
        const match = new MatchValueObject(objectId.toString(),false, false,userid,publicationid )

        const data = await this._matchcreateusecase.run(match) ;

        res.status(HttpCode.Created).json(data) ;
    }

}

export { CreateMatchController }