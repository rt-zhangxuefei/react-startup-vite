import { isRouteErrorResponse, useRouteError } from 'react-router';

import NotFound from './NotFound';

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  if (isRouteErrorResponse(error) && error.status === 404) {
    return <NotFound />;
  }

  const message = isRouteErrorResponse(error)
    ? error.statusText
    : error instanceof Error
      ? error.message
      : '未知错误';

  return (
    <div>
      <h1>出错了</h1>
      <p>{message}</p>
    </div>
  );
}

export default ErrorPage;
