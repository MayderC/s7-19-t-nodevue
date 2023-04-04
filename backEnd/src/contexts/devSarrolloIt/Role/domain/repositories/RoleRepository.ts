import { RoleModel } from "../entities/RoleEntity";

interface RoleRepository{
    create(role: RoleModel): Promise<RoleModel>;
    findAllRole(name?: string): Promise<RoleModel[]>;
}

export { type RoleRepository} ;

