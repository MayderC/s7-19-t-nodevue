import { User } from "../../../../User/domain/valueObjects/User";
import { MongooseUserModel } from "../../../../User/infrastructure/persistence/mongoose/MongooseUserModel";
import { AuthRepository } from "../../../domain/repositories/AuthRepository";


class MongooseAuthRepository implements AuthRepository {
    async auth (email: string): Promise<User | null>{
    const user: User | null = await MongooseUserModel.findOne({ email })

    if (!user) {
        return null
    }

    return user
}   
}

export {MongooseAuthRepository}