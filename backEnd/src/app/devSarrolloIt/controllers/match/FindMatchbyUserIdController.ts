import { Request, Response } from "express";
import { FindMatchbyUserIdUseCase } from "../../../../contexts/devSarrolloIt/Match/application/FindMatchbyUserIdUseCase";
import { MatchRepository } from "../../../../contexts/devSarrolloIt/Match/domain/repository/MatchRepository";
import { MongoRepositoryMatchImpl } from "../../../../contexts/devSarrolloIt/Match/infrastructure/persistence/mongoose/MongoRepositoryMatchImpl";
import { MissingFieldsError } from "../../../../contexts/shared/domain/errors/MissingFieldsError";
import { HttpCode } from "../../../shared/HttpCode";

class FindMatchbyUserIdController {
    private readonly _matchrepository: MatchRepository;
    private readonly _matchfindbyuseridusecase: FindMatchbyUserIdUseCase ;

    constructor(){
        this._matchrepository = new MongoRepositoryMatchImpl();
        this._matchfindbyuseridusecase = new FindMatchbyUserIdUseCase(this._matchrepository)
    }

    async run(req:Request, res: Response): Promise<void>{
        const {userid} = req.params

        if (typeof userid !== 'string'){
            throw new MissingFieldsError
        }

        const data = await this._matchfindbyuseridusecase.run(userid) ;
        res.status(HttpCode.Ok).json(data) 
    }
}

export { FindMatchbyUserIdController }