export interface ResponseTemplate<T> {
  data: T;
  success: boolean;
  message: string;
  timestamp: string;
  path: string;
}

export interface ResponseError {
  message: string;
  error: string;
  statusCode: number;
}
