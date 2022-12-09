import { NextSeo } from "next-seo";
import { Hero } from "../components/Hero";
import { NavBar } from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <NextSeo
        title="Nortull Consulting"
        description="Simple and Effective IT Solutions for your business"
      />

      <main>
        <Hero />
      </main>

      <footer></footer>
    </div>
  );
}
