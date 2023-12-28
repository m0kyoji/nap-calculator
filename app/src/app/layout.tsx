import GoogleAnalytics from "@/components/common/googleAnalytics";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Suspense } from "react";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'おひるね計算機',
  description: 'ポケモンスリープでおひる寝をする際の最適な長さがわかります。最適な長さのお昼寝をすることで、効率的にポケモンと出会うことができます。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="jp">
      <Suspense fallback={<></>}>
        <GoogleAnalytics />
      </Suspense>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
