export type Price = {
  amounts: number[];
  name: string;
  decription?: string;
  subText?: string;
};

export type Category = [name: string, prices: Price[]];
