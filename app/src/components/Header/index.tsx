'use client'
import { About } from "@/components/Header/elements/about";
import Link from "next/link";
import React, { useState } from "react";
import { CiCircleQuestion, CiCircleRemove } from "react-icons/ci";
import { useCurrentLocale } from 'next-i18n-router/client';
import { i18nConfig } from "@/lib/i18n/config";

export const Header = () => {
  const [aboutIsViewState, setAboutIsViewState] = useState<boolean>(false)
  const locale = useCurrentLocale(i18nConfig) || "";
  const [lang, setLang] = useState(locale)

  const handleQuestion = () => {
    setAboutIsViewState(!aboutIsViewState);
  }

  return (
      <>
        <div className={ 'fixed flex justify-between items-center max-w-4xl top-2 left-0 right-2 m-auto' }
             style={ { zIndex: 100 } }
        >
          <div className={'px-2 text-sm font-light'}>
            <Link href={'/ja'} className={'m-2'}>JPN</Link>
            <span>/</span>
            <Link href={'/en'} className={'m-2'}>ENG</Link>
          </div>
          {
              aboutIsViewState &&
              <CiCircleRemove className={ 'w-9 h-9 rounded-full bg-white shadow-lg cursor-pointer' }
                              onClick={ handleQuestion }/>
              ||
              <CiCircleQuestion className={ 'w-9 h-9 rounded-full bg-white shadow-lg cursor-pointer' }
                                onClick={ handleQuestion }/>
          }
        </div>
        {
            aboutIsViewState && <About onClick={ handleQuestion }/>
        }
      </>
  )
}