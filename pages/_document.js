import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render( ) {
    return (
      <Html>
        <Head>
            <link rel="icon" href="/favicon.png" /> 
            <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Overpass:wght@300;400;500;600;700;800;900&family=Squada+One&display=swap" rel="stylesheet" />
        </Head>
        <body>
            <Main />
                
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;