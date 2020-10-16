import Head from "next/head";
import Hero from "../components/hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Marília Mendonça - Site Não-Oficial</title>
      </Head>
      <section className="section">
        <Hero />
      </section>
    </div>
  );
}
