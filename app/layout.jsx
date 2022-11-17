import Header from "#/partials/Header";
import Footer from "#/partials/Footer";

import "#/styles/main.scss";

export default function Layout({ children }) {
  return (
    <html lang="nl">
      <head>
        <title>Karwijtje - Help elkaar een handje</title>
        <meta
          name="description"
          content="Iedereen is ergens goed in. En je wil niet altijd alles zelf doen.
              Help elkaar een handje, en kijk wat jij en jouw gemeenschap elkaar
              te bieden hebben!"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
