import Link from "next/link";

export default function AdminBar() {
  return (
    <nav className="bg-secondary w-100">
      <ul className="navbar-nav">
        <li className="nav-link">
          <Link href="/"></Link>
        </li>
      </ul>
    </nav>
  );
}
