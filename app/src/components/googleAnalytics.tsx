'use client'
import { usePathname, useSearchParams } from 'next/navigation'
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
        { GA_ID && (
            <>
              <script async src={ `https://www.googletagmanager.com/gtag/js?id=${ GA_ID }` }/>
              <script
                  dangerouslySetInnerHTML={ {
                    __html: `
                   window.dataLayer = window.dataLayer || [];
                   function gtag(){dataLayer.push(arguments);}
                   gtag('js', new Date());
                   gtag('config', '${ GA_ID }', {
                     page_path: window.location.pathname,
                   });`,
                  } }
              />
            </>
        ) }
      </>
  )
}

export default GoogleAnalytics