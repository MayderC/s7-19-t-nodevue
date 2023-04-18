import { HttpCode } from "../../../../../app/shared/HttpCode"
import { BaseError } from "../../../../shared/domain/errors/BaseError"

class PublicationDoesNotExistError extends BaseError {
  readonly httpCode = HttpCode.NotFound
  readonly name = "PublicationDoesNotExistError"

  constructor() {
    super("Publications for this user does not exist")
  }
}

export { PublicationDoesNotExistError }
