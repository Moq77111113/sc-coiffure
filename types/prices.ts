export type PriceTree = {
  name: string
  categories: PriceTree[]
  prices: { name: string; amount: number }[]
}
