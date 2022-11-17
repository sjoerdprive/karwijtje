import TransactionMonitor from "#/components/TransactionMonitor";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <section className="container py-5 my-2 my-md-5">
        <div className="row">
          <div className="col-12 col-md-6">
            <h1 className="display-3 fw-bold d-flex flex-column mb-4">
              Karwijtje <span className="lead">Help elkaar een handje</span>
            </h1>

            <p className="">
              Iedereen is ergens goed in. En je wil niet altijd alles zelf doen.
              Help elkaar een handje, en kijk wat jij en jouw gemeenschap elkaar
              te bieden hebben!
            </p>
            <Link
              href="/karwijtjes"
              className="btn btn-primary btn-lg text-white mb-4"
            >
              Bekijk wat jouw omgeving jou te bieden heeft
            </Link>
          </div>
          <div className="col-12 col-md-6">
            <img
              className="rounded w-100 shadow"
              alt=""
              src="/handshake.webp"
            />
          </div>
        </div>
      </section>
      <section className="container my-2 my-md-5">
        <h2 className="">Kijk wat mensen voor elkaar doen</h2>
        <div className="py-3">
          <TransactionMonitor />
        </div>
      </section>
      <section className="container my-2 my-md-5">
        <h2>Eerlijke ruil</h2>
        <p className="lead">
          We zijn zo gewend aan geld dat we soms vergeten dat we elkaar ook op
          andere manieren kunnen helpen, of onze waardering kunnen laten zien.
        </p>
        <p>
          Kook je graag? Maak dan wat extras voor iemand anders! Wandel je
          graag? Neem dan de hond van de buren ook meteen mee!
        </p>
        <p>
          Deel waar jij goed in bent met je gemeenschap, en krijg er iets moois
          voor terug.
        </p>
      </section>
      <section className="container my-2 my-md-5">
        <div className="row">
          <div className="col">
            <h2>Iedereen wint</h2>
            <p className="lead">
              Vaak kunnen we elkaar helpen zonder dat we het doorhebben. Stel je
              voor...
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <p className="rounded bg-secondary p-4 shadow fw-bold">
              Je hebt na je werk geen zin om de tuin te maaien, laat staan met
              dat oude apparaat dat jij in de schuur hebt staan! De buur heeft
              wel een mooie zitmaaier, maar ga je hem dan een uurloon betalen om
              jouw tuin te verzorgen? En hoeveel bied je hem dan aan? Kan je dat
              geld wel missen?
            </p>
          </div>

          <div className="col d-none d-md-inline-block"></div>
        </div>

        <div className="row">
          <div className="col d-none d-md-inline-block"></div>
          <div className="col">
            <p className="rounded bg-secondary p-4 shadow fw-bold">
              Misschien ben jij die buur wel! Je bent hartstikke blij met je
              zitmaaier en je vindt het eigenlijk jammer dat je niet meer tuin
              hebt om te maaien. Misschien veveel je je wel na je werk, of zie
              je het grasmaaien als een momentje voor jezelf.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <p className="rounded bg-secondary p-4 shadow fw-bold">
              Ondertussen betaal je al voor Netflix, Disney+ en Spotify Family.
              Daar maken jij en je huisgenoten graag gebruik van, maar je
              betaalt voor 6 en je bent maar met zijn drieën. Zonde eigenlijk.
            </p>
          </div>
          <div className="col d-none d-md-inline-block"></div>
        </div>

        <div className="row">
          <div className="col d-none d-md-inline-block"></div>
          <div className="col">
            <p className="rounded bg-secondary p-4 shadow fw-bold">
              Hoe fijn zou het zijn als je tijdens het maaien dan lekker een
              muziekje kan opzetten? Je hebt wel Spotify, maar je wil er niet
              voor betalen en die reclames komen je keel uit.{" "}
            </p>
          </div>
        </div>
      </section>
      <section className="container">
        <h2>Laat je omgeving voor je werken</h2>
        <p className="lead">
          Kan jij ook wel ergens wat hulp bij gebruiken? Of wil jij graag
          teruggeven aan jouw community?
        </p>
        <Link href="/karwijtjes" className="btn btn-primary btn-lg text-white">
          Bekijk wat jouw omgeving jou te bieden heeft
        </Link>
      </section>
    </main>
  );
}
