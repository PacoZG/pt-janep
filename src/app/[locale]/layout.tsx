/* istanbul ignore file */
import React from 'react'
import './globals.css'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'

interface RootLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

const RootLayout: React.FC<RootLayoutProps> = async ({ children }) => {
  const messages = await getMessages()
  const locale = await getLocale()

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <div className="App">
            <main>{children}</main>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export default RootLayout
