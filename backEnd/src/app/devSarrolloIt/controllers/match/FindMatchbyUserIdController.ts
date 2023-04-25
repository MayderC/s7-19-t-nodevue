import { Request, Response } from "express";
import { FindMatchbyUserIdUseCase } from "../../../../contexts/devSarrolloIt/Match/application/FindMatchbyUserIdUseCase";
import { MatchRepository } from "../../../../contexts/devSarrolloIt/Match/domain/repository/MatchRepository";
import { MongoRepositoryMatchImpl } from "../../../../contexts/devSarrolloIt/Match/infrastructure/persistence/mongoose/MongoRepositoryMatchImpl";
import { HttpCode } from "../../../shared/HttpCode";

class FindMatchbyUserIdController {
    private readonly _matchrepository: MatchRepository;
    private readonly _matchfindbyuseridusecase: FindMatchbyUserIdUseCase ;

    constructor(){
        this._matchrepository = new MongoRepositoryMatchImpl();
        this._matchfindbyuseridusecase = new FindMatchbyUserIdUseCase(this._matchrepository)
    }

    async run(req:Request, res: Response): Promise<void>{
        const data = await this._matchfindbyuseridusecase.run(req.logedInUser?.id!) ;
        res.status(HttpCode.Ok).json(data) 
    }
}

export { FindMatchbyUserIdController }