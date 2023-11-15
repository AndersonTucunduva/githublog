import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ApiContextProvider } from './context/context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GitHub Blog',
  description: 'Ele é o Bom',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <ApiContextProvider>{children}</ApiContextProvider>
      </body>
    </html>
  )
}
