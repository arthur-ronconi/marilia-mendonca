import Head from "next/head";
import Hero from "../sections/hero";
import News from "../sections/news";
import Cta from "../sections/cta";
import PhotoGallery from "../sections/photogallery";
import VideoGallery from "../sections/videogallery";
import Contact from "../sections/contact";
import Footer from "../sections/footer";
import Seo from "../sections/seo";
import Disclaimer from "../sections/disclaimer";

export default function Home() {
  return (
    <div>
      <Seo />
      <Disclaimer />
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
        <PhotoGallery />
      </section>
      {/* <section className="section py-0">
        <VideoGallery />
      </section> */}
      <Contact />
      <Footer />
    </div>
  );
}
