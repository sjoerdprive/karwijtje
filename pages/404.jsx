import Link from "next/link";

export default function PageNotFound() {
  return (
    <main>
      <h1>Deze pagina is niet beschikbaar</h1>
      <p>
        Ga terug naar de <Link href='/'>hoofdpagina</Link>
      </p>
    </main>
  );
}
