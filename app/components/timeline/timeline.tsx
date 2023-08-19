import './timeline.css'

export default function Timeline() {
return (
<section className="design-section">
    <div className="timeline">
        <div className="timeline-empty">
        </div>

        <div className="timeline-middle">
            <div className="timeline-circle"></div>
        </div>
        <div className="timeline-component timeline-content">
        <h3>Flexdoc</h3>
        <span>2023 - Atual</span>
            <p>A Flexdoc é uma empresa sediada em Brasília/DF, com atuação nacional, focada no desenvolvimento de soluções inovadoras e no fornecimento de serviços técnicos especializados, direcionados para a automação de fluxos de negócios, processamento de dados, e gestão documental, atuando desde a instalação e implantação das tecnologias até produção, digitalização, extração, tramitação, controle e disponibilização da informação com tecnologias no estado-da-arte.</p>
            <p>Competências: Auxílio na implantação e Gestão de Ambientes Windows Server, ambientes Linux, auxílio ao usuário, realização de manutenções preventivas, acompanhamento de chamados e documentação de projetos</p>
            <p>Cargo: Estagiário</p>
        </div>
        <div className="timeline-component timeline-content">
        <h3>Lew’Lara\TBWA </h3>
        <span>2022</span>
            <p>Fundada em 1992 e desde 2007 parte do grupo TBWA é uma das agências de comunicação mais reconhecidas do Brasil.</p>
            <p>Competências: Atendimento ao cliente · Solução de problemas de hardware · Suporte de hardware de TI</p>
            <p>Cargo: Estagiário</p>
        </div>
        <div className="timeline-middle">
            <div className="timeline-circle"></div>
        </div>
        

    </div>
</section>


)
}