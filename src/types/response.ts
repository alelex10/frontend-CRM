export interface ResponseTemplate<T> {
  data: T;
  success: boolean;
  message: string;
  timestamp: string;
  path: string;
}


            
export interface ResponsePaginated<T> {
    data: T;
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}

export interface ResponseError {
  message: string;
  error: string;
  statusCode: number;
}
