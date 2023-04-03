import { Request, Response } from "express";
import { CreateRoleUseCase } from "../../../../contexts/devSarrolloIt/Role/application/CreateRoleUseCase";
import { RoleRepository } from "../../../../contexts/devSarrolloIt/Role/domain/repositories/RoleRepository";
import { MongoRepositoryRoleImpl } from "../../../../contexts/devSarrolloIt/Role/infrastructure/persistence/mongoose/MongoRepositoryRoleImpl";
import { MissingFieldsError } from "../../../../contexts/shared/domain/errors/MissingFieldsError";
import { Types } from "mongoose";
import { RoleValueObject } from "../../../../contexts/devSarrolloIt/Role/domain/valueObjects/RoleValueObject";
import { HttpCode } from "../../../shared/HttpCode";

class CreateRoleController{
    private readonly _roleRepository: RoleRepository;
    private readonly _createRoleUseCase: CreateRoleUseCase;

    constructor(){
        this._roleRepository = new MongoRepositoryRoleImpl();
        this._createRoleUseCase = new CreateRoleUseCase(this._roleRepository);
    }

    async run(req: Request, res: Response): Promise<void>{
        const { name } = req.body ; 

        if ( typeof name !== 'string' ) throw new MissingFieldsError
        
        const objectId = new Types.ObjectId();
        const role = new RoleValueObject(objectId.toString(), name)

        const data = await this._createRoleUseCase.run(role) ;

        res.status(HttpCode.Created).json(data) ;

    }
}

export { CreateRoleController }