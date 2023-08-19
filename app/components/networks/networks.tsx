import './networks.css'
import linkedin from '/public/linkedin.png'
import github from '/public/git.png'

export default function Networks() {
    return (
        <div className="containerNet">
            <div className="email">
                <h1>e-mail para contato: <span>samuelmonteee@gmail.com</span></h1>
            </div>
                <div className="networksIcon">
                <a href="https://www.linkedin.com/in/samuel-monte-742665227/">
                    <img className="logonet" src={linkedin.src} alt="linkedin" />
                </a>
                <a href="https://github.com/SamuelGMonte">
                    <img className="logonet" src={github.src} alt="github" />
                </a>
                </div>
        </div>
    )
}