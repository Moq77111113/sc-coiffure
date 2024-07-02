export default ({
  request,
  apiSecret,
}: {
  request: Request;
  apiSecret: string;
}) => {
  const authorization = request.headers.get('authorization');
  if (!authorization) {
    return new Response('Unauthorized', { status: 401 });
  }

  const token = authorization.replace('Bearer ', '');
  if (token !== apiSecret) {
    return new Response('Unauthorized', { status: 401 });
  }
};
