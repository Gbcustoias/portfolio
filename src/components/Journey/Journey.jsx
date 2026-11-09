import "./Journey.css";

function Journey() {
  const journeySteps = [
    {
      title: "Nutrição",
      subtitle: "Base em Evidências",
      description:
        "Primeiros contatos com indicadores, interpretação de resultados e tomada de decisão baseada em evidências."
    },
    {
      title: "Pesquisa Científica",
      subtitle: "Método e Estatística",
      description:
        "Desenvolvimento de pensamento analítico através de pesquisa experimental, estatística e validação de hipóteses."
    },
    {
      title: "USP",
      subtitle: "Mestrado em Ciências",
      description:
        "Aprofundamento em bioestatística, metodologia científica e análise de dados aplicada."
    },
    {
      title: "Docência",
      subtitle: "Comunicação e Liderança",
      description:
        "Transformação de conhecimento complexo em informação acessível por meio do ensino universitário."
    },
    {
      title: "Tecnologia",
      subtitle: "Escalabilidade",
      description:
        "Automação de processos e desenvolvimento de soluções para ampliar o impacto da análise de dados."
    },
    {
      title: "Analytics",
      subtitle: "Tomada de Decisão",
      description:
        "Construção de indicadores, dashboards e análises voltadas para ambientes corporativos."
    },
    {
      title: "Data Science",
      subtitle: "Próxima Evolução",
      description:
        "Aplicação de Machine Learning e modelos analíticos para geração de conhecimento e previsões."
    }
  ];

  return (
    <section id="journey" className="journey">
      <div className="section-header">
        <span className="section-tag">
          Jornada Profissional
        </span>

        <h2>
          Uma carreira construída sobre análise de evidências.
        </h2>

        <p>
          Embora tenha passado por diferentes áreas,
          toda a minha trajetória possui um elemento em comum:
          transformar informação em conhecimento útil para apoiar
          decisões melhores.
        </p>
      </div>

      <div className="journey-roadmap">
        {journeySteps.map((step, index) => (
          <div className="journey-card" key={index}>
            <div className="journey-number">
              {String(index + 1).padStart(2, "0")}
            </div>

            <h3>{step.title}</h3>

            <span className="journey-subtitle">
              {step.subtitle}
            </span>

            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Journey;