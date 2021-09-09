export interface TextSize {
  BigTitle: string;
  Title: string;
  SubTitle: string;
  RegularText: string;
  RegularSmall: string;
  CompanyName: string;
  SubTitleAlternate: string;
}

export interface DefaultTextSizes {
  fontFamily: string;
  fontSize: number;
  fontStyle: 'normal' | 'italic' | 'oblique';
  fontWeight:
    | 'normal'
    | 'bold'
    | 'bolder'
    | 'lighter'
    | 100
    | 200
    | 300
    | 400
    | 500
    | 600
    | 700
    | 800
    | 900;
  lineHeight: number;
  color: string;
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize';
  opacity?: number;
}
