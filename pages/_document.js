import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        {/* Remove any scripts that might add unwanted attributes */}
      </body>
    </Html>
  )
} 