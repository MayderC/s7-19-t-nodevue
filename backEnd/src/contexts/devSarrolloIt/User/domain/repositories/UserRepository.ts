import { PartialExcept } from "../../../../shared/domain/types"
import type { UserModel } from "../entities/UserEntity"
import type { User } from "../valueObjects/User"

interface UserRepository {
  findByEmail: (email: string) => Promise<User | null>
  save: (user: User) => Promise<User>
}

export { type UserRepository }
