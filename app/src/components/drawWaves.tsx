import Wave from "react-wavify";

export const DrawWaves = (props: {num: number}) => {
  return (
      <>
        {
          [...Array(props.num)].map((_, i) => (
              <Wave fill='#007bff'
                    paused={false}
                    style={{
                      display: 'inline-block',
                      position: 'absolute',
                      zIndex: 10 - i,
                      height: '30vh'
                    }}
                    options={{
                      height: 20,
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