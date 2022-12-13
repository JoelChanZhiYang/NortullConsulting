import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        titleTemplate="%s | Nortull Consulting"
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://www.nortullconsulting.ie/",
          siteName: "Nortull Consulting",
        }}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/images/favicon.svg",
          },
        ]}
      />
      <Component {...pageProps} />
    </>
  );
}
