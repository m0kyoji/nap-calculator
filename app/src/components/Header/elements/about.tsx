import { QA } from "@/components/Header/elements/qa";
import { MAX_SLEEP_TIME } from "@/constant/sleep";
import Link from "next/link";

export const About = (props: {onClick: () => void}) => {

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
            <QA title={ '何ができる？' }>
              <div>
                <p style={ { fontFeatureSettings: "palt" } }>
                  ポケモンスリープでおひる寝をする際の最適な長さがわかります。<br/>
                  最適な長さのおひる寝をすることで、効率的にポケモンと出会えます。
                </p>
              </div>
              <div className={ 'mt-4 bg-gray-50 rounded-xl p-3 text-sm' }>
                <p className={ 'px-2 pb-2 font-medium text-gray-800' }>具体的には？</p>
                <ul className={ 'list-disc pl-6 text-gray-800' }>
                  <li><span>効率的にポケモンの飴を入手できます</span></li>
                  <li><span>捕まえたいポケモンと出会いやすくなります</span></li>
                </ul>
              </div>
            </QA>
            <QA title={ 'どう使う？' }>
              <div>
                <p style={ { fontFeatureSettings: "palt" } }>
                  寝ている島と今のカビゴンエナジーを入力するとおすすめのおひる寝時間が表示されます。
                </p>
                <p style={ { fontFeatureSettings: "palt" } }>
                  おすすめ時間を参考におひる寝をしましょう！
                </p>
              </div>
            </QA>
            <QA title={ 'どうやって計算しているの？' }>
              <div>
                <p style={ { fontFeatureSettings: "palt" } }>
                  睡眠リサーチを行う際に出会うことができるポケモンの数は、ねむけパワーとそれに対する<Link
                    href={ 'https://wikiwiki.jp/poke_sleep/%E3%83%AF%E3%82%AB%E3%82%AF%E3%82%B5%E6%9C%AC%E5%B3%B6' }
                    className={ 'underline underline-offset-4 text-pink-600' } prefetch={ false }
                    target="_blank">各島毎の基準値</Link>を元に決定されています。
                </p>
                <p style={ { fontFeatureSettings: "palt" } }>
                  おひるね計算機では、計算したねむけパワーを島の基準値と照らし合わせることで、出会うことができるポケモンの数が最大となる時間を推定しています。
                </p>
              </div>
              <div className={ 'mt-4 bg-gray-50 rounded-xl p-3 text-sm' }>
                <p className={ 'px-2 pb-2 font-medium text-gray-800' }>各計算方法</p>
                <ul className={ 'list-disc pl-6 text-gray-800' }>
                  <li><span>ねむけパワー =（カビゴンエナジー x 睡眠スコア）</span></li>
                  <li><span>睡眠スコア =（寝た分数 / 510 x 100）</span></li>
                </ul>
              </div>
            </QA>
          </div>
        </div>
      </>
  )
}