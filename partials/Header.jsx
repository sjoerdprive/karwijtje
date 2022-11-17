import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Link className="d-block py-3" href="/">
              <img
                className="w-100"
                src="/Karwijtje logo.webp"
                alt="Karwijtje logo, ga naar hoofpagina"
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
