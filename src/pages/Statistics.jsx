import { Helmet } from "react-helmet-async";

export default function Statistics() {
  return (
    <div>
      <Helmet>
        <title>Statistics</title>
        <link
          rel="icon"
          type="image/png"
          href="/public/assets/favicon-16x16.png"
        />
      </Helmet>
      <h2>Statistics</h2>
    </div>
  );
}
