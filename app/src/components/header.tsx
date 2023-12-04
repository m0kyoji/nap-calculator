import { DrawWaves } from "@/components/drawWaves";
import Wave from 'react-wavify'

export const Header = () => {
  return (
      <>
        <div className={'flex justify-center'}>
          <p>おひるね計算機</p>
        </div>
        {/*<DrawWaves num={5}/>*/}
      </>
  )
}