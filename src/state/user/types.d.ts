import { ResponseError } from '../../lib/request';

export interface IUserDefaultState {
  apiError?: ResponseError;
  loading: boolean;
  details?: any;
}

export interface ILoginValues {
  user: string;
  type: string;
  callback: string;
}

export interface ILoginResponse {
  accountId: number;
  token: string;
}
