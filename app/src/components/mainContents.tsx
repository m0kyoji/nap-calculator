import { Header } from "@/components/Header";
import { InputForm } from "@/components/InputForm/";
import { Result } from "@/components/Result/";
import { TimeSelectBar } from "@/components/TimeSelectBar/";

export const MainContents = () => {
  return (
      <main className={'relative z-10 pt-0 sm:pb-10 sm:pt-12 backdrop-filter backdrop-blur-2xl bg-slate-50 bg-opacity-70 min-h-screen'}>
        <section>
          <Header/>
        </section>
        <section>
          <InputForm/>
        </section>
        <section>
          <Result/>
        </section>
        <section>
          <TimeSelectBar/>
        </section>
      </main>
  )
}