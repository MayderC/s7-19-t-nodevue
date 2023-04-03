import { RoleModel } from "../../../domain/entities/RoleEntity";
import { RoleRepository } from "../../../domain/repositories/RoleRepository";
import { RoleValueObject } from "../../../domain/valueObjects/RoleValueObject";
import { MongooseRoleModel } from "./MongooseRoleModel";

class MongoRepositoryRoleImpl implements RoleRepository{
    async create(role: RoleModel): Promise<RoleModel> {
        const newRole: RoleModel = await MongooseRoleModel.create(role);
        const { name , id } = newRole
        return new RoleValueObject( id, name )
    }

}

export { MongoRepositoryRoleImpl } ;