export default defineEventHandler(async (event) => {
  const { apiSecret } = useRuntimeConfig();
  const headers = getHeaders(event);

  if (headers.authorization?.replace('Bearer ', '') !== apiSecret) {
    throw createError({
      status: 401,
      statusMessage: 'Unauthorized',
      stack: undefined,
    });
  }
});
