import type { HttpCode } from "../../../../app/shared/HttpCode";

abstract class BaseError extends Error {
  abstract readonly httpCode: HttpCode;
}

export { BaseError };
