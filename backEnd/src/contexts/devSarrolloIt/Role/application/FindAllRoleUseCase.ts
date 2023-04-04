import { RoleModel } from "../domain/entities/RoleEntity";
import { RoleRepository } from "../domain/repositories/RoleRepository";

class FindAllRoleUseCase{

// AQUI HACER PRUEBAS CON LOS PARAMETROS QUE LLEGAN POR CONSTRUCTOR   

    constructor(private rolerepository: RoleRepository){}

    async run(name?: string): Promise<RoleModel[]>{
        const role = await this.rolerepository.findAllRole(name);
        return role
    }
}

export { FindAllRoleUseCase }