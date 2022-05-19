import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layer from "../components/Layer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layer>
      <Component {...pageProps} />
    </Layer>
  );
}

export default MyApp;
