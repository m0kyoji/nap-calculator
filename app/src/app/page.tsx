import { Header } from "@/components/header";
import { InputForm } from "@/components/inputForm";
import { Result } from "@/components/result";
import Head from "next/head";

export default function Home() {
  return (
      <>
        <Head>
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
