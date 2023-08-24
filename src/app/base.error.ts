export declare type ErrorDetails = {
  [key: string]: string;
}[];
export interface BaseErrorInterface {
  message: string;
  code?: number;
  status?: string;
  details?: ErrorDetails;
}
export declare enum ErrorCode {
  OK = 200,
  //   INVALID_ARGUMENT = 400,
  INVALID_ARGUMENT = 422,
  FAILED_PRECONDITION = 400,
  OUT_OF_RANGE = 400,
  UNAUTHENTICATED = 401,
  PERMISSION_DENIED = 403,
  NOT_FOUND = 404,
  ABORTED = 409,
  ALREADY_EXISTS = 409,
  RESOURCE_EXHAUSTED = 429,
  CANCELLED = 499,
  DATA_LOSS = 500,
  UNKNOWN = 500,
  INTERNAL = 500,
  NOT_IMPLEMENTED = 501,
  UNAVAILABLE = 503,
  DEADLINE_EXCEEDED = 504,
}
export declare enum ErrorStatus {
  OK = 'OK',
  INVALID_ARGUMENT = 'INVALID_ARGUMENT',
  FAILED_PRECONDITION = 'FAILED_PRECONDITION',
  OUT_OF_RANGE = 'OUT_OF_RANGE',
  UNAUTHENTICATED = 'UNAUTHENTICATED',
  PERMISSION_DENIED = 'PERMISSION_DENIED',
  NOT_FOUND = 'NOT_FOUND',
  ABORTED = 'ABORTED',
  ALREADY_EXISTS = 'ALREADY_EXISTS',
  RESOURCE_EXHAUSTED = 'RESOURCE_EXHAUSTED',
  CANCELLED = 'CANCELLED',
  DATA_LOSS = 'DATA_LOSS',
  UNKNOWN = 'UNKNOWN',
  INTERNAL = 'INTERNAL',
  NOT_IMPLEMENTED = 'NOT_IMPLEMENTED',
  UNAVAILABLE = 'UNAVAILABLE',
  DEADLINE_EXCEEDED = 'DEADLINE_EXCEEDED',
}
declare type InvalidArgumentError = BaseError;
declare type FailedPreconditionError = BaseError;
declare type OutOfRangeError = BaseError;
declare type UnauthenticatedError = BaseError;
declare type PermissionDeniedError = BaseError;
declare type NotFoundError = BaseError;
declare type AbortedError = BaseError;
declare type AlreadyExistsError = BaseError;
declare type ResourceExhaustedError = BaseError;
declare type CancelledError = BaseError;
declare type DataLossError = BaseError;
declare type UnknownError = BaseError;
declare type InternalError = BaseError;
declare type NotImplementedError = BaseError;
declare type UnavailableError = BaseError;
declare type DeadlineExceededError = BaseError;
/**
 * Represents an error with a format similar to Google Apis Error
 * @see {@link https://cloud.google.com/apis/design/errors} Google Api Design Guide - Error Model
 */
export declare class BaseError extends Error implements BaseErrorInterface {
  readonly message: string;
  readonly code: number;
  readonly status: string;
  readonly details: ErrorDetails;
  readonly isOperational = true;
  /**
   * Create a new BaseError
   * @param message Message
   * @param code Code based in http status code
   * @param status Status based in Google Api Design Guide {@link https://cloud.google.com/apis/design/errors#handling_errors}
   * @param details List with error details
   */
  constructor({message, code, status, details}: BaseErrorInterface);
  /**
   * Return an error's representation
   */
  toString(): string;
  /**
   * Static method that return an error representation as object
   * @param message Message
   * @param code Code based in http status code
   * @param status Status based in Google Api Design Guide {@link https://cloud.google.com/apis/design/errors#handling_errors}
   * @param details List with error details
   */
  static buildError(
    code: number,
    message: string,
    status: string,
    details?: object[]
  ): {
    error: {
      code: number;
      message: string;
      status: string;
      details: object[];
    };
  };
  /**
   * Convert error to Api response object
   */
  toObject(): {
    error: {
      code: number;
      message: string;
      status: string;
      details: object[];
    };
  };
  /**
   * Create an Invalid Argument Error
   * @param message Message
   * @param details Details
   */
  static createInvalidArgumentError(
    message: string,
    details?: ErrorDetails
  ): InvalidArgumentError;
  /**
   * Create a Failed Precondition Error
   * @param message Message
   * @param details Details
   */
  static createFailedPreconditionError(
    message: string,
    details?: ErrorDetails
  ): FailedPreconditionError;
  /**
   * Create a Out Of Range Error
   * @param message Message
   * @param details Details
   */
  static createOutOfRangeError(
    message: string,
    details?: ErrorDetails
  ): OutOfRangeError;
  /**
   * Create a Unauthenticated Error
   * @param message Message
   * @param details Details
   */
  static createUnauthenticatedError(
    message: string,
    details?: ErrorDetails
  ): UnauthenticatedError;
  /**
   * Create a Permission Denied Error
   * @param message Message
   * @param details Details
   */
  static createPermissionDeniedError(
    message: string,
    details?: ErrorDetails
  ): PermissionDeniedError;
  /**
   * Create a Not Found Error
   * @param message Message
   * @param details Details
   */
  static createNotFoundError(
    message: string,
    details?: ErrorDetails
  ): NotFoundError;
  /**
   * Create a Aborted Error
   * @param message Message
   * @param details Details
   */
  static createAbortedError(
    message: string,
    details?: ErrorDetails
  ): AbortedError;
  /**
   * Create a Already Exists Error
   * @param message Message
   * @param details Details
   */
  static createAlreadyExistsError(
    message: string,
    details?: ErrorDetails
  ): AlreadyExistsError;
  /**
   * Create a Resource Exhausted Error
   * @param message Message
   * @param details Details
   */
  static createResourceExhaustedError(
    message: string,
    details?: ErrorDetails
  ): ResourceExhaustedError;
  /**
   * Create a Cancelled Error
   * @param message Message
   * @param details Details
   */
  static createCancelledError(
    message: string,
    details?: ErrorDetails
  ): CancelledError;
  /**
   * Create a Data Loss Error
   * @param message Message
   * @param details Details
   */
  static createDataLossError(
    message: string,
    details?: ErrorDetails
  ): DataLossError;
  /**
   * Create a Unknown Error
   * @param message Message
   * @param details Details
   */
  static createUnknownError(
    message: string,
    details?: ErrorDetails
  ): UnknownError;
  /**
   * Create a Internal Error
   * @param message Message
   * @param details Details
   */
  static createInternalError(
    message: string,
    details?: ErrorDetails
  ): InternalError;
  /**
   * Create a Not Implemented Error
   * @param message Message
   * @param details Details
   */
  static createNotImplementedError(
    message: string,
    details?: ErrorDetails
  ): NotImplementedError;
  /**
   * Create an Unavailable Error
   * @param message Message
   * @param details Details
   */
  static createUnavailableError(
    message: string,
    details?: ErrorDetails
  ): UnavailableError;
  /**
   * Create a Deadline Exceeded Error
   * @param message Message
   * @param details Details
   */
  static createDeadlineExceededError(
    message: string,
    details?: ErrorDetails
  ): DeadlineExceededError;
}
export {};
