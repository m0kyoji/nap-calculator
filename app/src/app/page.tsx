import { Header } from "@/components/header";
import { InputForm } from "@/components/inputForm";
import { Result } from "@/components/result";
import Head from "next/head";

export default function Home() {
  return (
      <>
        <Head>
          <title>おひるね計算機</title>
          <meta name="description" content="archive"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="icon" href="/favicon.ico"/>
        </Head>
        <main>
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
      </>
  )
}
