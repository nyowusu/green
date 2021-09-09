export interface IGlobalDefaultState {
  loading: boolean;
  apiError?: Error;
}

export interface IResponse {
  success: boolean;
  data?: any;
  errors?: any;
}
