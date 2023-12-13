'use client'
import { usePathname, useSearchParams } from 'next/navigation'
import Script from 'next/script'
import { useEffect } from 'react'

import { pageview } from '@/lib/gtag'
import { GA_ID } from "@/constant/gtag";

const GoogleAnalytics = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!GA_ID) {
      return
    }
    const url = pathname + searchParams.toString()
    pageview(url)
  }, [pathname, searchParams])

  return (
      <>
        <Script
            strategy='lazyOnload'
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />
        <Script id='gtag-init' strategy='afterInteractive'>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname,
          });
        `}
        </Script>
      </>
  )
}

export default GoogleAnalytics