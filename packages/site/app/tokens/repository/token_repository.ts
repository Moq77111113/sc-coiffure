import { db } from '#core/services/db';

export default class TokenRepository {
  public async addOrUpdate(key: string, value: string, expires?: string) {
    const now = Date.now().toString();
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
        }))
      )
      .executeTakeFirst();
  }

  public async getOne(key: string) {
    return await db
      .selectFrom('tokens')
      .select('token')
      .where('name', '=', key)
      .executeTakeFirst();
  }
}
