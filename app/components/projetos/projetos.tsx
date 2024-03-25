import "./projetos.css"
import bookmark from "/public/bookmark.svg"

export default function Projetos() {
    return (
        <div className="containerProjects ">
            <h1 className="text-4xl">Projetos</h1>
            <div className="projectDiv">
                <a href="https://github.com/SamuelGMonte/Kabum-Searcher" className="project"><img src={bookmark.src} width={30} alt="" /><span>Kabum Searcher</span><p>Um simples webscrapper feito em Python</p></a>
                <a href="https://github.com/SamuelGMonte/portfolio2.0" className="project"><img src={bookmark.src} width={30} alt="" /><span>Portfólio 2.0</span><p>Meu antigo portfólio</p></a>
                <a href="https://github.com/SamuelGMonte/sptransjava" className="project"><img src={bookmark.src} width={30} alt="" /><span>BuSearcher</span><p>Aplicativo de consumo da API da SPTrans para a atualização de veículos em tempo real feito em Java</p></a>
            </div>
        </div>

    )
}