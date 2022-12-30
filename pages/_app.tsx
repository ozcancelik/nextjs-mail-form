import "../styles/globals.css";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  display: "swap",
  subsets: ["latin-ext"],
  weight: ["400", "700"],
});

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={poppins.className}>
      <Component {...pageProps} />
    </div>
  );
}
