import Document, { Html, Head, Main, NextScript } from "next/document";

class GameUpDocument extends Document {
  render() {
    return (
      <Html lang="pl" className="scroll-smooth">
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Cabin|Roboto:100,300,400,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <form
            name="contact-form"
            data-netlify={true}
            netlify-honeypot="bot-field"
            hidden
          >
            <input type="text" name="name" />
            <input type="email" name="email" />
            <textarea name="message"></textarea>
          </form>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default GameUpDocument;
