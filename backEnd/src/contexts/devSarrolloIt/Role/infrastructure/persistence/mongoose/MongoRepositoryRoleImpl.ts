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

    async findAllRole(name?: string): Promise<RoleModel[]> {

        let role: RoleModel[]

        if(name) {
            role = await MongooseRoleModel.find({
                $or: [{ name: { $regex: name, $options: "i" } }],
            });
        } else {
            role = await MongooseRoleModel.find({}) ;         
        }

        const roleArray = role.map((role) => {
            return { id: role.id , name: role.name}
        })

        return roleArray
        
    }

}

export { MongoRepositoryRoleImpl } ;