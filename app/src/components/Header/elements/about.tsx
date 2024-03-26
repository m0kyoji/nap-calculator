import { QA } from "@/components/Header/elements/qa";
import Link from "next/link";
import { t } from "i18next";

export const About = (props: { onClick: () => void }) => {

  return (
      <>
        <div
            onClick={ props.onClick }
            className={ 'w-full h-full fixed top-0 left-0 right-0 z-40 sm:pt-12 bg-slate-300 bg-opacity-70' }
        >
        </div>
        <div
            className={ 'p-2 fixed left-0 right-0 mx-auto w-full ' }
            style={ { zIndex: 41, maxWidth: '41em' } }>
          <div
              className={ 'flex flex-col gap-8 items-center p-10 bg-white rounded-3xl shadow-lg' }
              style={ { zIndex: 41 } }
          >
            <QA title={ t('about purpose title') }>
              <div>
                <p style={ { fontFeatureSettings: "palt" } } className={ 'whitespace-pre-wrap' }>
                  { t('about purpose text') }
                </p>
              </div>
              <div className={ 'mt-4 bg-gray-50 rounded-xl p-3 text-sm' }>
                <p className={ 'px-2 pb-2 font-medium text-gray-800' }>{ t('about purpose detail title') }</p>
                <ul className={ 'list-disc pl-6 text-gray-800' }>
                  <li><span>{ t('about purpose detail text 1') }</span></li>
                  <li><span>{ t('about purpose detail text 2') }</span></li>
                </ul>
              </div>
            </QA>
            <QA title={ t('about how_to_use') }>
              <div>
                <p style={ { fontFeatureSettings: "palt" } }>
                  { t('about how_to_use answer 1') }
                </p>
                <p style={ { fontFeatureSettings: "palt" } }>
                  { t('about how_to_use answer 2') }
                </p>
              </div>
            </QA>
            <QA title={ t('about how_to_calculate') }>
              <div>
                <p style={ { fontFeatureSettings: "palt" } }>
                  { t('about how_to_calculate answer 1') }<Link
                    href={ 'https://wikiwiki.jp/poke_sleep/%E3%83%AF%E3%82%AB%E3%82%AF%E3%82%B5%E6%9C%AC%E5%B3%B6' }
                    className={ 'underline underline-offset-4 text-pink-600' } prefetch={ false }
                    target="_blank">{ t('about how_to_calculate answer link') }</Link>{ t('about how_to_calculate answer 2') }
                </p>
                <p style={ { fontFeatureSettings: "palt" } }>
                  { t('about how_to_calculate answer 3') }
                </p>
              </div>
              <div className={ 'mt-4 bg-gray-50 rounded-xl p-3 text-sm' }>
                <p className={ 'px-2 pb-2 font-medium text-gray-800' }>{ t('about how_to_calculate detail title') }</p>
                <ul className={ 'list-disc pl-6 text-gray-800' }>
                  <li><span>{ t('about how_to_calculate detail formula 1') }</span></li>
                  <li><span>{ t('about how_to_calculate detail formula 2') }</span></li>
                </ul>
              </div>
            </QA>
          </div>
        </div>
      </>
  )
}