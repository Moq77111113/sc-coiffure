import { db } from '#core/services/db'

type TokenKey = 'INSTAGRAM' | 'GOOGLE'
export default class TokenRepository {
  public async  addOrUpdate(key: TokenKey, value: string, expires?: string) {
    const now = Date.now().toString()
    return await db
      .insertInto('tokens')
      .values({
        name: key,
        token: value,
        created_at: now,
        updated_at: now,
        expires_at: expires,
      })
      .onConflict((oc) =>
        oc.column('name').doUpdateSet((eb) => ({
          token: eb.ref('excluded.token'),
          updated_at: now,
          expires_at: expires,
        })),
      )
      .executeTakeFirst()
  }

  public async getOne(key: TokenKey) {
    return await db
      .selectFrom('tokens')
      .select('token')
      .where('name', '=', key)
      .executeTakeFirst()
  }
}
