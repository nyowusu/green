export interface IDefaultState {
  loading: boolean;
  apiError?: Error;
}

export interface IResponse {
  success: boolean;
  data?: any;
  errors?: any;
}
