import { User } from "../../../User/domain/valueObjects/User";


interface AuthRepository {
    auth (email: string): Promise<User | null>
}

export {type AuthRepository}