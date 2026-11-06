import "./Education.css";

function Education() {
  const education = [
    {
      institution: "Universidade de São Paulo (USP)",
      degree: "Mestrado em Ciências",
      description:
        "Desenvolvimento de pesquisa experimental com foco em bioestatística, metodologia científica, análise de dados e interpretação de resultados."
    },
    {
      institution: "Pós-graduação",
      degree: "Nutrição Esportiva",
      description:
        "Aprofundamento em avaliação de evidências científicas, interpretação de resultados e aplicação prática de conhecimento baseado em dados."
    },
    {
      institution: "Graduação",
      degree: "Nutrição",
      description:
        "Formação voltada para análise de indicadores de saúde, avaliação clínica e tomada de decisão baseada em evidências."
    },
    {
      institution: "FATEC",
      degree: "Análise e Desenvolvimento de Sistemas",
      description:
        "Formação complementar focada em desenvolvimento de software, bancos de dados, automação e tecnologias para soluções orientadas por dados."
    }
  ];

  return (
    <section id="education" className="education">
      <div className="section-header">
        <span className="section-tag">Formação</span>

        <h2>
          Formação construída entre ciência, pesquisa e tecnologia.
        </h2>

        <p>
          Minha base acadêmica combina metodologia científica,
          estatística e tecnologia, permitindo atuar na interseção
          entre análise de dados e desenvolvimento de soluções.
        </p>
      </div>

      <div className="education-timeline">
        {education.map((item, index) => (
          <div key={index} className="education-item">
            <div className="education-dot"></div>

            <div className="education-card">
              <h3>{item.degree}</h3>

              <h4>{item.institution}</h4>

              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;