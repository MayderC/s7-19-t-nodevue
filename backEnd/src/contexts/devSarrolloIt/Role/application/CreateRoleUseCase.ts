import { RoleModel } from "../domain/entities/RoleEntity";
import { RoleRepository } from "../domain/repositories/RoleRepository";

class CreateRoleUseCase{
    private _rolerepository: RoleRepository ;

    constructor(roleRepository: RoleRepository){
        this._rolerepository = roleRepository
    }

    async run(role: RoleModel): Promise<RoleModel>{
        const newRole = await this._rolerepository.create(role);
        return newRole
    }
}

export { CreateRoleUseCase } ;