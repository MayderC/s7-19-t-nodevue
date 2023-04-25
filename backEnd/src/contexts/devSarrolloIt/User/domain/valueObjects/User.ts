import type { UserModel } from "../entities/UserEntity"

class User implements UserModel {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly email: string,
    readonly password: string,
    readonly roleId: string[],
    readonly stackId: string[]
  ) {}
}

export { User }
