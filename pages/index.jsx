import Head from "next/head";
import Hero from "../sections/hero";
import News from "../sections/news";
import Cta from "../sections/cta";
import Gallery from "../sections/gallery";
import Contact from "../sections/contact";
import Footer from "../sections/footer";

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
      <section className="section pb-0">
        <Cta />
      </section>
      <section className="section py-0">
        <Gallery title="Fotos" />
      </section>
      <section className="section py-0">
        <Gallery title="Vídeos" />
      </section>
      <Contact />
      <Footer />
    </div>
  );
}
