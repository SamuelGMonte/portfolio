import "./header.css"
import eu from '/public/eu.jpg'

export default function Header() {
  return (
    <main className='mainHero'>
      <div className="containerCenter">
          <h1>Samuel Monte</h1>
          <img className="photo" src={eu.src}  alt="foto Samuel Monte" />
          <h2>Desenvolvedor</h2>
      </div>
    </main>
  )
}