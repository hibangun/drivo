import { FC } from 'react'
import { Links, LiveReload, Meta, Scripts, ScrollRestoration } from 'remix'

const Document: FC<{ title?: string }> = function Document({
  title,
  children
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title && <title>{title}</title>}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === 'development' && <LiveReload />}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default Document
