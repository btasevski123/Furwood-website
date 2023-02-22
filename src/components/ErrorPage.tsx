import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div className="ErrorPage">
      <h1>Error 404</h1>
      <p>Sorry!</p>
      <Link to="/">Homepage</Link>
    </div>
  );
};
