import { RoleModel } from "../entities/RoleEntity";

class RoleValueObject implements RoleModel{
    readonly id: string;
    readonly name: string;

    constructor(id: string, name:string){
        this.id = id ;
        this.name = name ;
    }
}
 
export { RoleValueObject };