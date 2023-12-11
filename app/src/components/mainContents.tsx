import { Header } from "@/components/header";
import { InputForm } from "@/components/inputForm";
import { Result } from "@/components/result";
import { TimeSelectBar } from "@/components/timeSelectBar";

export const MainContents = () => {
  return (
      <main className={'relative z-10 pt-0 sm:pt-12 backdrop-filter backdrop-blur-2xl bg-slate-50 bg-opacity-70 min-h-screen'}>
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