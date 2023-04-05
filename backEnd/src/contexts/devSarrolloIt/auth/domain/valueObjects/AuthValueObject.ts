import { AuthModel } from "../entities/AuthEntity";


class AuthValueObject implements AuthModel {
    constructor(readonly email: string, readonly password: string){}
}

export { AuthValueObject }