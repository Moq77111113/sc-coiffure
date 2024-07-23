import { db } from "~/db/kysely"

export type Keys = 'ADDRESS' | 'PHONE' | 'EMAIL' | 'FACEBOOK' | 'INSTAGRAM' | 'SEO_TAGS' | 'SEO_SCHEMA' | 'GOOGLE_MAP' 

export default defineEventHandler(async (event) => {

    const query = getQuery(event) 


    const select = () => {
        if(!query.keys) {
            return db.selectFrom('config')
        }
        const keys = Array.isArray(query.keys) ? query.keys as string[] : [...query.keys?.toString()?.split(',') ?? ''] 
        return db.selectFrom('config').where('key', 'in', keys)
    }
   
   
    const config = await select().select(['config.key', 'config.value']).execute()

    const data = {
        toJSON: () => config,
      }
      return data

    
})