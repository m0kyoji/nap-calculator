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
            className={ 'p-2 fixed left-0 right-0 max-w-lg mx-auto w-full ' }
            style={ { zIndex: 41 } }>
          <div
              className={ 'flex flex-col gap-8 items-center p-10 bg-white rounded-3xl shadow-lg' }
              style={ { zIndex: 41 } }
          >
            <QA title={ '何ができる？' }>
              <div>
                <p style={ { fontFeatureSettings: "palt" } }>
                  ポケモンスリープでおひる寝をする際の最適な長さがわかります。最適な長さのおひる寝をすることで、効率的にポケモンと出会えます。
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
                  寝ている島と今のカビゴンパワーを入力するとおすすめのおひる寝時間が表示されます。
                </p>
                <p style={ { fontFeatureSettings: "palt" } }>
                  おすすめ時間を参考におひる寝をしましょう！
                </p>
              </div>
            </QA>
            <QA title={ 'どうやって計算しているの？' }>
              <div>
                <p style={ { fontFeatureSettings: "palt" } }>
                  睡眠レポートを提出する時に出会うことができる匹数は、ねむけパワーとそれに対する<Link
                    href={ 'https://wikiwiki.jp/poke_sleep/%E3%83%AF%E3%82%AB%E3%82%AF%E3%82%B5%E6%9C%AC%E5%B3%B6' }
                    className={ 'underline underline-offset-4 text-pink-600' } prefetch={ false }
                    target="_blank">各島毎の基準値</Link>を元に決定されています。
                </p>
                <p style={ { fontFeatureSettings: "palt" } }>
                  おひるね計算機では、選択された島と入力されたカビゴンパワーを元にねむけパワーを計算し、基準値と照らし合わせることで出会うことができる最大匹数を推定しています。
                </p>
              </div>
              <div className={ 'mt-4 bg-gray-50 rounded-xl p-3 text-sm' }>
                <p className={ 'px-2 pb-2 font-medium text-gray-800' }>各計算方法</p>
                <ul className={ 'list-disc pl-6 text-gray-800' }>
                  <li><span>ねむけパワー =（カビゴンパワー x 睡眠スコア）</span></li>
                  <li><span>睡眠スコア =（寝た分数 / 510 x 100）</span></li>
                </ul>
              </div>
            </QA>
          </div>
        </div>
      </>
  )
}