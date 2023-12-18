import Wave from "react-wavify";

export const DrawWaves = (props: {num: number, height: string, color: string}) => {
  return (
      <>
        {
          [...Array(props.num)].map((_, i) => (
              <Wave key={i} fill={props.color}
                    paused={false}
                    style={{
                      display: 'inline-block',
                      position: 'absolute',
                      zIndex: 10 - i,
                      height: props.height
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