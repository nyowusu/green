export interface IQuotesDefaultState {
  loading: boolean;
  apiError?: any;

  list: IQuote;
}

export interface ICost {
  total: number;
  gas: number;
  electric: number;
}

export interface IEnergy {
  all: number;
  day: number;
  night: number;
  standing: number;
  title?: string;
}

export interface IPricing {
  cost: ICost;
  gas: IEnergy;
  electric: IEnergy;
  name: string;
  fixed: boolean;
  length?: number;
  exitFees: number;
}

export interface IQuote {
  pricing: IPricing[];
  startDate: IDate;
  paymentDay: number;
}

export interface IQuotesRequest {
  postcode: string;
  gas: number;
  electric: number;
  e7: number;
}
