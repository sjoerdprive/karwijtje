import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container py-5 mt-5">
        <div className="row">
          <ul className="list-unstyled">
            <li>
              <Link className="link-light" href="/">
                Voorpagina
              </Link>
            </li>
            <li>
              <Link className="link-light" href="/karwijtjes">
                Karwijtjes
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
