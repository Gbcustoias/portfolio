import "./Journey.css";

function Journey() {
  const journeySteps = [
  {
    title: "Nutrição",
    description:
      "Formação inicial voltada para avaliação de indicadores de saúde e tomada de decisão baseada em evidências."
  },
  {
    title: "Pesquisa Científica",
    description:
      "Atuação em estudos experimentais envolvendo estatística, análise de dados e validação de hipóteses."
  },
  {
    title: "Mestrado USP",
    description:
      "Aprofundamento em metodologia científica, bioestatística e interpretação de resultados."
  },
  {
    title: "Docência",
    description:
      "Experiência no ensino de pesquisa científica, bioestatística e comunicação técnica."
  },
  {
    title: "Tecnologia",
    description:
      "Aplicação de software e automação para ampliar a capacidade de análise e geração de valor."
  },
  {
    title: "Dados & Analytics",
    description:
      "Construção de dashboards, indicadores e análises para suporte à tomada de decisão."
  },
  {
    title: "Ciência de Dados",
    description:
      "Aplicação de Machine Learning e métodos analíticos para exploração e previsão de cenários."
  }
];

  return (
    <section id="journey" className="journey">
      <div className="section-header">
        <span className="section-tag">
          Jornada
        </span>

        <h2>
          Uma evolução contínua entre ciência,
          tecnologia e dados.
        </h2>
        <p>
          Minha trajetória foi construída em diferentes áreas, aqui um pouco da minha história até os dias de hoje.
        </p>
      </div>

      <div className="timeline">
        {journeySteps.map((step, index) => (
          <div
            className="timeline-item"
            key={index}
          >
            <div className="timeline-marker">
              {index + 1}
            </div>

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