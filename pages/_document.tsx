import Document, { Html, Head, Main, NextScript } from "next/document";

class GameUpDocument extends Document {
  render() {
    return (
      <Html lang="pl" className="scroll-smooth">
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Cabin|Roboto:100,300,400,700&display=optional"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default GameUpDocument;
