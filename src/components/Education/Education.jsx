import "./Education.css";

function Education() {
  const education = [
    {
      institution: "Universidade de São Paulo (USP)",
      degree: "Mestrado em Ciências",
      period: "Pesquisa Científica",
      highlight: "Base Analítica",
      description:
        "Pesquisa experimental envolvendo bioestatística, metodologia científica, análise de dados, interpretação de resultados e produção científica."
    },
    {
      institution: "Pós-graduação em Nutrição Esportiva",
      degree: "Especialização",
      period: "Aprofundamento",
      highlight: "Evidências Científicas",
      description:
        "Avaliação crítica de evidências, interpretação de resultados e aplicação prática de conhecimento baseado em dados."
    },
    {
      institution: "Graduação em Nutrição",
      degree: "Bacharelado",
      period: "Formação Inicial",
      highlight: "Tomada de Decisão",
      description:
        "Construção de pensamento analítico voltado para indicadores, avaliação clínica e decisões baseadas em evidências."
    },
    {
      institution: "FATEC",
      degree: "Análise e Desenvolvimento de Sistemas",
      period: "Tecnologia",
      highlight: "Expansão Técnica",
      description:
        "Desenvolvimento de software, bancos de dados, automação, APIs e tecnologias para soluções orientadas por dados."
    }
  ];

  return (
    <section id="education" className="education">
      <div className="section-header">
        <span className="section-tag">Formação</span>

        <h2>
          Ciência, análise de dados e tecnologia como uma única trajetória.
        </h2>

        <p>
          Minha formação foi construída em diferentes áreas do conhecimento,
          sempre com um elemento em comum: análise de informações,
          interpretação de resultados e tomada de decisão baseada em evidências.
        </p>
      </div>

      <div className="education-grid">
        {education.map((item, index) => (
          <div className="education-card" key={index}>
            <span className="education-badge">
              {item.highlight}
            </span>

            <h3>{item.degree}</h3>

            <h4>{item.institution}</h4>

            <span className="education-period">
              {item.period}
            </span>

            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;