import { compare } from "bcrypt";
import { User } from "../../User/domain/valueObjects/User";
import { AuthRepository } from "../domain/repositories/AuthRepository";
import { AuthValueObject } from "../domain/valueObjects/AuthValueObject";


class CreateAuthUseCase {
    constructor(private readonly authRepository: AuthRepository){}

    async run(user: AuthValueObject): Promise<User> {
        const userFound = await this.authRepository.auth(user.email)

        if(!userFound){
            throw new Error
        }

        const validatePass = await compare(user.password, userFound.password)

        if(!validatePass) {
            throw new Error
        }

        return userFound
    }
}

export {CreateAuthUseCase}