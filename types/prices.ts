export type Price = {
  amount: number
  name: string
}

export type Category = {
  name: string
  categories?: Category[]
  prices?: Price[]
}