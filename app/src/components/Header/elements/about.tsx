export const About = (props: {onClick: () => void}) => {


  return (
      <div
          onClick={props.onClick}
          className={'fixed top-0 left-0 right-0 mx-auto w-full flex items-center'}
          style={{maxWidth: '460px'}}
      >
        <dl>
          <dt>何ができる？</dt>
          <dd>
            <p>ポケモンスリープでおひる寝をする際の最適な長さがわかります。</p>
            <p>最適な長さのお昼寝をすることで、効率的にポケモンと出会うことができます。</p>
          </dd>
        </dl>

      </div>
  )
}