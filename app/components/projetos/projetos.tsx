import "./projetos.css"
import bookmark from "/public/bookmark.svg"

export default function Projetos() {
    return (
        <div className="containerProjects ">
            <h1 className="text-4xl">Projetos</h1>
            <div className="projectDiv">
                <a href="https://github.com/SamuelGMonte/Kabum-Searcher" className="project project1"><img src={bookmark.src} width={30} alt="" /><span>Kabum Searcher</span><p>Um simples webscrapper feito em Python</p></a>
                <a href="https://github.com/SamuelGMonte/portfolio2.0" className="project project2"><img src={bookmark.src} width={30} alt="" /><span>Portfólio 2.0</span><p>Meu antigo portfólio</p></a>
            </div>
        </div>

    )
}