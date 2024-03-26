import GoogleAnalytics from "@/components/common/googleAnalytics";
import { i18nextInitOptions } from "@/lib/i18n/init";
import { I18nProvider } from "@/providers/I18nextProvider";
import i18n from "i18next";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/globals.css'
import React, { Suspense } from "react";

const inter = Inter({ subsets: ['latin'] })

void i18n.init(i18nextInitOptions, (err) => {
  if ( err ) {
    console.error("i18next failed to initialize", err);
  }
});

export const metadata: Metadata = {
  title      : 'おひるね計算機',
  description: 'ポケモンスリープでおひる寝をする際の最適な長さがわかります。最適な長さのお昼寝をすることで、効率的にポケモンと出会うことができます。',
}

export default function RootLayout({
                                     children,
                                     params: { locale },
                                   }: {
  children: React.ReactNode
  params: {
    locale: string;
  };
}) {
  void i18n.changeLanguage(locale);
  return (
      <html lang={ locale }>
      <Suspense fallback={ <></> }>
        <GoogleAnalytics/>
      </Suspense>
      <I18nProvider>
        <body className={ inter.className }>{ children }</body>
      </I18nProvider>
      </html>
  )
}
