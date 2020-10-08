import React from 'react'
import NextDocument, { Head, Main, NextScript } from 'next/document'
import { hasGaId, GA_ID } from '../utils/ga'

class Document extends NextDocument {
  render() {
    return (
      <html lang="ja">
        <Head>
          {hasGaId ? (
            <>
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', {
                    page_path: window.location.pathname,
                  });`,
                }}
              />
            </>
          ) : null}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default Document
