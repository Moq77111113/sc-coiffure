import { serverQueryContent } from '#content/server'

import auth from '~/server/utils/auth'
import type { Category } from '~/types/prices'

export default defineEventHandler({
  onRequest: [auth],
  handler: async (e) => {
    const { categories } = await serverQueryContent<{ categories: Category[] }>(e)
      .where({ _path: /^\/prices/ })
      .findOne()

    const data = {
      toJSON: () => categories,
    }
    return data
  },
})
