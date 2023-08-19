import Image from 'next/image'
import "./aboutme.css"


export default function AboutMe() {
  return (
    <div className="container">
      <div className="containerAbout">
          <div className="about">
              <h1 className="sobreH1">Um pouco sobre mim...</h1>
              <p className="sobrep">
              Desde sempre interessado pelo desenvolvimento web, comecei a criar sites no meu tecnólogo de informática no Colégio Nossa Senhora de Lourdes, onde aprendi lógica de programação, tais como sua utilização em sistemas arduino, sites utilizando JavaScript, dentro outras stacks. Atualmente curso bacharelado de sistema de informação pela FIAP. Além disso sempre fui apaixonado por jogos eletrônicos e também esportes, paixão essa a qual eu alimento em meu tempo livre.
              </p>
          </div>
      </div>
    </div>
  )
}