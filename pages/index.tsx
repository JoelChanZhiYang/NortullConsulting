import { NextSeo } from "next-seo";
import { Hero } from "../components/Hero";
import { Solutions } from "../components/Solutions";

export default function Home() {
  return (
    <div>
      <NextSeo
        title="Home"
        description="Simple and Effective IT Solutions for your business"
      />

      <main>
        <Hero />
        <Solutions />
      </main>

      <footer></footer>
    </div>
  );
}
