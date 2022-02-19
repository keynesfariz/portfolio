import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="crossOrigin"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Martel:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/uicons-bold-rounded/css/uicons-bold-rounded.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css"
        />
      </Head>
      <body className="bg-zinc-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
