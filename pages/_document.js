import { Html, Head, Main, NextScript } from "next/document";

function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="/favicon/1.png" rel="shortcut icon" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
