import Head from "next/head";
import Hero from "../components/hero";

export default function Home() {
  return (
    <div>
      <section className="section">
        <Hero />
      </section>
    </div>
  );
}
