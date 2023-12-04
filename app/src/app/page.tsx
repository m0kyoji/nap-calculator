import { Debug } from "@/components/debug";
import { Header } from "@/components/header";
import { InputForm } from "@/components/inputForm";
import { Result } from "@/components/result";

export default function Home() {

  return (
    <main>
      <Debug/>
      <section>
        <Header/>
      </section>
      <section>
        <InputForm/>
      </section>
      <section>
        <Result/>
      </section>
    </main>
  )
}
