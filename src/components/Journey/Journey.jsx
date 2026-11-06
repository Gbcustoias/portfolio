import "./Journey.css";

function Journey() {
  const journeySteps = [
    {
      title: "Nutrição",
      description:
        "Formação voltada para análise de indicadores de saúde, avaliação clínica e tomada de decisão baseada em evidências."
    },
    {
      title: "Pesquisa Científica",
      description:
        "Atuação em estudos experimentais envolvendo estatística, metodologia científica e análise de resultados."
    },
    {
      title: "Mestrado USP",
      description:
        "Desenvolvimento de competências avançadas em pesquisa, bioestatística, interpretação de dados e produção científica."
    },
    {
      title: "Docência Universitária",
      description:
        "Ensino de disciplinas relacionadas à bioestatística, metodologia científica e nutrição."
    },
    {
      title: "Tecnologia",
      description:
        "Aplicação de desenvolvimento de software e automação para escalar processos e gerar valor por meio de dados."
    },
    {
      title: "Data Analytics",
      description:
        "Construção de indicadores, dashboards, relatórios executivos e análises para suporte à tomada de decisão."
    },
    {
      title: "Business Intelligence",
      description:
        "Transformação de dados em informações acionáveis através de processos de análise, modelagem e visualização."
    },
    {
      title: "Ciência de Dados",
      description:
        "Aplicação de Machine Learning e técnicas analíticas avançadas para exploração, previsão e interpretação de dados."
    }
  ];

  return (
    <section id="journey" className="journey">
      <div className="section-header">
        <span className="section-tag">Jornada Profissional</span>

        <h2>Uma trajetória construída sobre análise de evidências.</h2>

        <p>
          Minha carreira sempre esteve conectada à interpretação de dados,
          pesquisa e tomada de decisão baseada em evidências. A tecnologia
          surgiu como uma evolução natural para ampliar o impacto dessa
          capacidade analítica.
        </p>
      </div>

      <div className="timeline">
        {journeySteps.map((step, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Journey;