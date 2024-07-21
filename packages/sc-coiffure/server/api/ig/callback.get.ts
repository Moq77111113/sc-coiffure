import { Token } from '~/types/ig'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  console.log(query, 'im in')
  if (!query.code) {
    return { error: 'No code provided' }
  }
  await getShortToken(query.code.toString())
  return query
})

const getShortToken = async (code: string) => {
  const { igClientId, igClientSecret, igReturnUrl, igApiUrl } =
    useRuntimeConfig()
  const data = new FormData()
  data.set('client_id', igClientId)
  data.set('client_secret', igClientSecret)
  data.set('grant_type', 'authorization_code')
  data.set('redirect_uri', igReturnUrl)
  data.set('code', code)
  try {
    const res = await $fetch<Token['Short']>(`${igApiUrl}/oauth/access_token`, {
      method: 'POST',
      body: data,
    })
    console.log(res)
  } catch (error) {
    console.error('error', error)
  }
}
