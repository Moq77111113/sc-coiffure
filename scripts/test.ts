import 'dotenv/config'
import SQLite from 'better-sqlite3'
import { Kysely, SqliteDialect } from 'kysely'
import type { DB } from '~/types/db'

const db = (function () {
  const dialect = new SqliteDialect({
    database: new SQLite(process.env.DATABASE_URL),
  })

  return new Kysely<DB>({
    dialect,
  })
})()

const data = await db
  .selectFrom('prices_categories')
  .innerJoin('prices', 'prices_categories.id', 'prices.category')
  .select([
    'prices_categories.id as categoryId',
    'prices_categories.name as categoryName',
    'prices_categories.parent_id as parentId',
    'prices.name as priceName',
    'prices.amount as priceAmount',
  ])
  .orderBy('prices_categories.id')
  .orderBy('prices_categories.parent_id')
  .orderBy('prices.amount')
  .execute()

type Data = typeof data

type Tree = {
  name: string
  categories: Tree[]
  prices: { name: string; amount: number }[]
}
const buildTree = (data: Data, parentId: number | null = null): Tree[] => {
  return data
    .filter((item) => item.parentId === parentId)
    .map((item) => ({
      name: item.categoryName,
      categories: buildTree(data, item.categoryId),
      prices: data
        .filter((price) => price.categoryId === item.categoryId && price.priceName)
        .map((price) => ({
          name: price.priceName,
          amount: price.priceAmount,
        })),
    }))
}

const priceTree = buildTree(data)

console.log(JSON.stringify(priceTree, null, 2))
