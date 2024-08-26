import { db } from '~/db/kysely'
import auth from '~/server/utils/auth'
import type { PriceTree } from '~/types/prices'
const getCategories = async () => {
  return await db
    .selectFrom('prices_categories')
    .select(['id as categoryId', 'name as categoryName', 'parent_id as parentId'])
    .orderBy('id')
    .orderBy('parent_id')
    .execute()
}

const getPrices = async () => {
  return await db
    .selectFrom('prices')
    .select(['category as categoryId', 'name as priceName', 'amount as priceAmount'])
    .orderBy('category')
    .orderBy('amount')
    .execute()
}

type Categories = Awaited<ReturnType<typeof getCategories>>
type Prices = Awaited<ReturnType<typeof getPrices>>

const buildTree = (
  categories: Categories,
  prices: Prices,
  parentId: number | null = null,
): PriceTree[] => {
  return categories
    .filter((category) => category.parentId === parentId)
    .map((category) => ({
      name: category.categoryName,
      categories: buildTree(categories, prices, category.categoryId),
      prices: prices
        .filter((price) => price.categoryId === category.categoryId)
        .map((price) => ({
          name: price.priceName,
          amount: price.priceAmount,
        })),
    }))
}

export default defineEventHandler({
  onRequest: [auth],
  handler: async () => {

    const categories = await getCategories()
    const prices = await getPrices()
    const priceTree = buildTree(categories, prices)

    if (!priceTree.length) {
      throw createError({ status: 500 })
    }
    const data = {
      toJSON: () => priceTree,
    }
    return data
  },
})
