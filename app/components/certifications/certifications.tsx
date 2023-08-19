import './certifications.css'

export default function Cerfications() {
    return (
        <div className="containerCert">
            <h1 className="">Certificações</h1>
            <div className="divCerts">
                <div className="cardCert">
                    <h2 className='pfsense'>
                        PFSense: Solução completa de firewall
                    </h2>
                    <p>Instituição: <span>Udemy</span></p>
                    <p>Duração:  <span>11 horas</span></p>
                    <p>Professor: <span>Michael Soares</span></p>
                    <p>Data de conclusão: <span>2023</span> </p>
                    <p>Link do certificado: <a href='https://www.udemy.com/certificate/UC-89cae7eb-1a48-476c-bdc1-2862e508e8c6/'>Clique</a></p>
                </div>
                <div className="cardCert">
                    <h2 className='redes'>
                        Arquitetura de Redes
                    </h2>
                    <p>Instituição: <span>Udemy</span></p>
                    <p>Duração: <span>22 horas</span> </p>
                    <p>Professor: <span>Gabriel Torres</span> </p>
                    <p>Data de conclusão: <span>2023</span> </p>
                    <p>Link do certificado: <a href='https://www.udemy.com/certificate/UC-3cf627d3-fd12-4157-a132-96e5e4bff810/'>Clique</a> </p>
                </div>
                <div className="cardCert">
                    <h2 className='windows'>
                        Infraestrutura de TI Com Windows Server 2012 R2
                    </h2>
                    <p>Instituição: <span>Udemy</span></p>
                    <p>Duração: <span>9 horas</span> </p>
                    <p>Professor: <span>Ednaldo Mendes</span></p>
                    <p>Data de conclusão: <span>2023</span></p>
                    <p>Link do certificado: <a href='https://www.udemy.com/certificate/UC-394b5ea0-0ff9-444e-9044-fd0f3d5175a6/'>Clique</a> </p>
                </div>
                <div className="cardCert">
                    <h2 className='linux'>     
                        Hacker Ético Profissional com Kali Linux v2023
                    </h2>
                    <p>Instituição: <span>Udemy</span></p>
                    <p>Duração: <span>35 horas</span></p>
                    <p>Professor: <span>Vitor Mazuco</span> </p>
                    <p>Data de conclusão: <span>2023</span></p>
                    <p>Link do certificado: <a href="https://www.udemy.com/certificate/UC-985d38fe-d886-40c4-84b7-c90b63bea820/">Clique</a></p>
                </div>
            </div>
        </div>

    )
}