import { HttpCode } from "../../../../../app/shared/HttpCode"
import { BaseError } from "../../../../shared/domain/errors/BaseError"

class PublicationDoesNotExistCommentError extends BaseError {
  readonly httpCode = HttpCode.NotFound
  readonly name = "PublicationDoesNotExistCommentError"

  constructor() {
    super("Publications does not exist to comment")
  }
}

export { PublicationDoesNotExistCommentError }