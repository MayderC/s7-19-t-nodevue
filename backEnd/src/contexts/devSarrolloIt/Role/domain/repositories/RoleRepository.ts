import { RoleModel } from "../entities/RoleEntity";

interface RoleRepository{
    create(role: RoleModel): Promise<RoleModel>;
}

export { type RoleRepository} ;

