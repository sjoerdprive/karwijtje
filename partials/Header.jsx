import { useAuth } from "#/supabase/auth";
import { faSearch, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Header() {
  const { user } = useAuth();

  const Auth = () => {
    return !!user ? (
      <Link
        className="nav-link d-flex align-items-center"
        href="/dashboard/account"
      >
        <FontAwesomeIcon className="me-2" icon={faCircleUser} />
        <span className="">Account</span>
      </Link>
    ) : (
      <Link className="nav-link" href="/login">
        Log in
      </Link>
    );
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <Link className="navbar-brand" href="/">
                <img
                  className="w-100"
                  src="/Karwijtje logo.webp"
                  alt="Karwijtje logo, ga naar voorpagina"
                />
              </Link>
            </div>
            <div className="col d-flex align-items-center">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item me-2">
                    <Link className="nav-link" href="/karwijtjes">
                      Karwijtjes
                    </Link>
                  </li>
                  <li className="nav-item me-2">
                    <Auth />
                  </li>
                </ul>

                <form className="d-flex">
                  <label className="input-group" htmlFor="sitesearch">
                    <input
                      id="sitesearch"
                      className="form-control"
                      type="search"
                      placeholder="Zoek"
                    />
                    <button
                      className="btn btn-light input-group-text"
                      type="submit"
                    >
                      <FontAwesomeIcon icon={faSearch} />
                      <span className="visually-hidden">Zoek</span>
                    </button>
                  </label>
                </form>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
