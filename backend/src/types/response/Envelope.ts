/**
 * An enumeration that describes possible response statuses.
 * They are not exactly the same as HTTP response codes
 * to be able to extend and give more information about the server response.
 */
export enum ResponseStatus {
  NotImplemented = -1, // 0xFFFFFFFF
  Success = 1,
  NotAuthenticated = 2,
  NotAuthorized = 3,
  NotFound = 4,
  FailedValidation = 5,
  InvalidOperation = 6,
  ExternalRequestFailed = 7,
  UnexpectedError = 255, // 0x000000FF
}

/**
 * Standard response envelope to provide metadata about the response or error message
 */
export interface IBaseResponseEnvelope {
  status: ResponseStatus;
  userMessage?: string;
  systemMessage?: string;
  stackTrace?: string;
  generatedAtUtc?: Date;
}

/**
 * Standard response envelope to provide metadata about the response or error message
 */
export class BaseResponseEnvelope {
  status: ResponseStatus;
  userMessage?: string;
  systemMessage?: string;
  stackTrace?: string;
  generatedAtUtc: Date;

  constructor(envelope: IBaseResponseEnvelope) {
    this.status = envelope?.status ?? 0;
    this.userMessage = envelope?.userMessage ?? 'OK';
    this.systemMessage = envelope?.systemMessage;
    this.stackTrace = envelope?.stackTrace;
    this.generatedAtUtc = new Date();
  }
}

/**
 * Standard response envelope for a single model as a data payload
 */
export class ResponseEnvelope<T> extends BaseResponseEnvelope {
  data?: T;

  constructor(model: T) {
    super({ status: 0 });
    this.data = model;
  }
}

/**
 * Standard response envelope for a non-paged collection of items
 */
export class CollectionResponse<T> extends BaseResponseEnvelope {
  data?: T[];
  total: number;

  constructor(collection: T[]) {
    super({ status: 0 });
    this.data = collection;
    this.total = collection?.length ?? 0;
  }
}

/**
 * Standard response envelope for a paged collection of items,
 * includes page number and page size as well as the total number of entities
 * returned to the request and stored in the database
 */
export class PagedCollectionResponse<T> extends CollectionResponse<T> {
  totalReturned: number;
  pageNumber: number;
  pageSize: number;

  constructor(
    collection: T[],
    dbTotal: number,
    pageNumber: number,
    pageSize: number,
  ) {
    super(collection);
    this.totalReturned = this.total;
    this.total = dbTotal;
    this.pageNumber = pageNumber;
    this.pageSize = pageSize;
  }
}
