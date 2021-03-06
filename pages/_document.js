import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Russo+One"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Dancing+Script"
            rel="stylesheet"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@400;600;700&display=swap"
            rel="stylesheet"
          />

        </Head>

        <body>
        <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css" />
            
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
