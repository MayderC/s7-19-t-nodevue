import { Request, Response } from "express";
import { FindAllRoleUseCase } from "../../../../contexts/devSarrolloIt/Role/application/FindAllRoleUseCase";
import { RoleRepository } from "../../../../contexts/devSarrolloIt/Role/domain/repositories/RoleRepository";
import { MongoRepositoryRoleImpl } from "../../../../contexts/devSarrolloIt/Role/infrastructure/persistence/mongoose/MongoRepositoryRoleImpl";
import { HttpCode } from "../../../shared/HttpCode";

interface Query {
    name: string;
}

class FindAllRoleController{
    private readonly _rolerepository: RoleRepository ;
    private readonly _findallroleusecase: FindAllRoleUseCase;

    constructor(){
        this._rolerepository = new MongoRepositoryRoleImpl() ;
        this._findallroleusecase = new FindAllRoleUseCase(this._rolerepository) ;
    }
    
    async run(req: Request, res: Response): Promise<void>{
        const { name } = req.query as unknown as Query;

        const data = await this._findallroleusecase.run(name);

        res.status(HttpCode.Ok).json(data) ;

    }
}
export { FindAllRoleController }