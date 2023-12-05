import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from "next/head";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'おひるね計算機',
  description: 'おひるね計算機',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <Head>
        <title>おひるね計算機</title>
        <meta name="description" content="おひるね計算機"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
