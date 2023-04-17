import { HttpCode } from "../../../../../app/shared/HttpCode"
import { BaseError } from "../../../../shared/domain/errors/BaseError"

class PublicationAlreadyExistsError extends BaseError {
  readonly httpCode = HttpCode.Conflict
  readonly name = "PublicationAlreadyExistsError"

  constructor() {
    super("this Publication already exists")
  }
}

export { PublicationAlreadyExistsError }
