import { Debug } from "@/components/debug";
import { Result } from "@/components/result";
import { InputForm } from "@/components/inputForm";

export default function Home() {

  return (
    <main>
      <Debug/>
      <section>
        <div>
          <p>おひるね計算機</p>
        </div>
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
