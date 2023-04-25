import { HttpCode } from "../../../../../app/shared/HttpCode";
import { BaseError } from "../../../../shared/domain/errors/BaseError";

class StackAlreadyExistsError extends BaseError {
  readonly httpCode = HttpCode.Conflict;
  readonly name = "StackAlreadyExistsError";

  constructor() {
    super("Stack already exists");
  }
}

export { StackAlreadyExistsError };
