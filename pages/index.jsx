import Head from "next/head";
import Hero from "../sections/hero";
import News from "../sections/news";
import Cta from "../sections/cta";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Marília Mendonça - Site Não-Oficial</title>
      </Head>
      <section>
        <Hero />
      </section>
      <section className="section">
        <News />
      </section>
      <section className="section">
        <Cta />
      </section>
    </div>
  );
}
