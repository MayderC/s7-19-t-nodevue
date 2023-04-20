import { UserDoesNotExistError } from "../domain/errors/UserDoesNotExistError";
import { User } from "../domain/valueObjects/User";


class UserFindById {
    constructor(private readonly userRepository = userRepository) { }

    async run(id: string): Promise<User> {
        const userFound = await this.userRepository.findById(id)
        
        if (!userFound) {
            throw new UserDoesNotExistError()
        }
        
        return userFound
    }
}

export { UserFindById }