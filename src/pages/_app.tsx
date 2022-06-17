import type { AppProps } from "next/app";
import Script from "next/script";
import Layout from "../components/layout";
import { GlobalStyles } from "../styles/globalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </>
  );
}

export default MyApp;
