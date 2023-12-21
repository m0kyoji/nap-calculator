import { ReactNode } from "react";

type QAProps = {
  title: string,
  children: ReactNode;
};

export const QA = ({title, children}: QAProps) => {
  return (
      <dl className={ 'flex flex-col gap-3 justify-center items-center w-full max-w-md' }>
        <dt className={ 'font-medium' }>
          <p
              className={ 'text-center' }
              style={{fontFeatureSettings: "palt"}}
          >{ title }</p>
        </dt>
        <dd className={ 'font-light w-full' }>
          <div className={ 'px-4' }>
            { children }
          </div>
        </dd>
      </dl>
  )
}