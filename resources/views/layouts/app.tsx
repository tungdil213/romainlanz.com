import { Assets, Vite } from '#start/view'
import { Header } from '#views/partials/header'
import { Footer } from '#views/partials/footer'

interface AppProps {
  title?: string
  page?: string
  children: JSX.Element
}

export function App(props: AppProps) {
  const { title = 'RomainLanz', page, children } = props

  return (
    <>
      {'<!DOCTYPE html>'}
      <html lang="fr">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          <title>{title}</title>

          <Vite.Entrypoint entrypoints={['resources/css/app.scss', 'resources/js/app.ts']} />
        </head>

        <body {...(page ? { 'data-page': page } : {})}>
          <Header />

          {children}

          <Footer />
        </body>
      </html>
    </>
  )
}
