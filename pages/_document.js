import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='id'>
      <Head>
        <link
          rel='stylesheet'
          href='https://www.hsb.co.id/iconfont/iconfont.css'
        />
        <link
          rel='stylesheet'
          type='text/css'
          href='https://www.hsb.co.id/css/public.css'
        />
        <link
          rel='stylesheet'
          type='text/css'
          href='https://www.hsb.co.id/css/forex-article.css?t=1'
        />
        <link
          rel='stylesheet'
          type='text/css'
          href='https://www.hsb.co.id/css/pcheader.css'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
