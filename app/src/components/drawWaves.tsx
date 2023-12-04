import Wave from "react-wavify";

export const DrawWaves = (props: {num: number}) => {
  return (
      <>
        {
          [...Array(props.num)].map((_, i) => (
              <Wave fill='#8FC5FF33'
                    paused={false}
                    style={{
                      display: 'inline-block',
                      position: 'absolute',
                      zIndex: 10 - i,
                    }}
                    options={{
                      height: 10 * i,
                      amplitude: 7 * Math.floor(Math.random() * 10) + 1,
                      speed: 0.15,
                      points: 3 + i,
                    }}
              />
          ))
        }
      </>
  )
}