import 'dotenv/config'

const getAuthUrl = () => {
  const clientId = process.env.NUXT_IG_CLIENT_ID
  const redirectUrl = process.env.NUXT_IG_RETURN_URL
  if (!clientId || !redirectUrl) {
    throw new Error('Missing required environment variables')
  }
  const url = new URL('https://api.instagram.com/oauth/authorize')
  url.search = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUrl,
    scope: 'user_profile,user_media',
    response_type: 'code',
  }).toString()

  return url.toString()
}

const url = getAuthUrl()
console.log(url)
