import { HttpCode } from "../../../../../app/shared/HttpCode"
import { BaseError } from "../../../../shared/domain/errors/BaseError"

class UserAlreadyExistsError extends BaseError {
  readonly httpCode = HttpCode.Conflict
  readonly name = "UserAlreadyExistsError"

  constructor() {
    super("User already exists")
  }
}

export { UserAlreadyExistsError }
