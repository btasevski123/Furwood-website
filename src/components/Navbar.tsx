import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="menu navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img
            src="https://cdn.shopify.com/s/files/1/1824/4681/t/3/assets/h2_logo.png?0"
            alt="Logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav navbar-nav ml-auto">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Catalog</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
            <li>
              <Link to="/">Chair</Link>
            </li>
            <li>
              <Link to="/">Lamp</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
