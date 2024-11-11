import { Helmet } from "react-helmet-async";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <Helmet>
        <title>Error</title>
        <link rel="icon" type="image/png" href="/public/assets/favicon-16x16.png" />
      </Helmet>
      <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
    </div>
  );
}
