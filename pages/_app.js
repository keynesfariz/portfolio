import Router from "next/router";
import nprogress from "nprogress";
import "../styles/globals.css";
import "../styles/nprogress.css";

nprogress.configure({ showSpinner: false });

Router.events.on("routeChangeStart", () => nprogress.start());
Router.events.on("routeChangeComplete", () => nprogress.done());
Router.events.on("routeChangeError", () => nprogress.done());

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
