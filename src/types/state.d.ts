import { IGlobalDefaultState } from '../state/global/types';
import { IQuotesDefaultState } from '../state/quotes/types';
import { IUserDefaultState } from '../state/user/types';

export interface IState {
  user: IUserDefaultState;
  quotes: IQuotesDefaultState;
  global: IGlobalDefaultState;
}
