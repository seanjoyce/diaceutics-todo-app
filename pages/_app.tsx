import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Header from "../components/Header/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header></Header>
      <div className="container">
        <Component {...pageProps} />{" "}
      </div>
    </>
  );
}

export default MyApp;
