import './globals.css'
import Navigation from './components/common/Navigation/Navigation'
import Footer from './components/common/Footer/Footer'
import localFont from 'next/font/local'
import { LoadingProvider } from './context/LoadingContext'
import LoadingOverlay from './components/common/LoadingOverlay/LoadingOverlay'
import { PageDataProvider } from './context/PageDataContext'

const avenirLight = localFont({
  src: './fonts/avenir-lt-w01_35-light1475496.woff2',
  variable: '--font-avenir-light',
})

const avenirHeavy = localFont({
  src: './fonts/avenir-lt-w01_85-heavy1475544.woff2',
  variable: '--font-avenir-heavy',
})

const futuraLight = localFont({
  src: './fonts/futura-lt-w01-light.woff2',
  variable: '--font-futura-light',
})

const barlowExtraLight = localFont({
  src: './fonts/Barlow-ExtraLight.ttf',
  variable: '--font-barlow-extralight',
})

const futuraBook = localFont({
  src: './fonts/futura-lt-w01-book.woff2',
  variable: '--font-futura-book',
})

const customFont1 = localFont({
  src: './fonts/2hXzmNaFRuKTSBR9nRGO-A.woff2',
  variable: '--font-custom-1',
})

const customFont2 = localFont({
  src: './fonts/14AxwKgJhKIO-YYUP_KtZag5eI2G47JWe0-AuFtD150.woff2',
  variable: '--font-custom-2',
})

export const metadata = {
  title: 'Isolde App',
  description: 'Reinventing Opera Accessibility',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={[
          avenirLight.variable,
          avenirHeavy.variable,
          futuraLight.variable,
          futuraBook.variable,
          customFont1.variable,
          customFont2.variable,
          barlowExtraLight.variable,
        ].join(' ')}
      >
        <LoadingProvider>
          <LoadingOverlay />
          <PageDataProvider>
            <Navigation />
            {children}
            <Footer />
          </PageDataProvider>
        </LoadingProvider>
      </body>
    </html>
  )
}
