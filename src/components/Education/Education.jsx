import "./Education.css";

function Education() {
  const education = [
    {
      institution: "Universidade de São Paulo (USP)",
      degree: "Mestrado em Ciências",
      description:
        "Pesquisa experimental, bioestatística, metodologia científica e análise de dados."
    },
    {
      institution: "FATEC",
      degree: "Análise e Desenvolvimento de Sistemas",
      description:
        "Desenvolvimento de software, bancos de dados, APIs e automação de processos."
    },
    {
      institution: "Pós-graduação em Nutrição Esportiva",
      degree: "Especialização",
      description:
        "Avaliação crítica de evidências e interpretação de resultados."
    },
    {
      institution: "Graduação em Nutrição",
      degree: "Bacharelado",
      description:
        "Formação baseada em evidências, indicadores e tomada de decisão."
    }
  ];

  const certifications = [
    "Databases for Data Scientists",
    "Expressway to Data Science: Python Programming",
    "Introduction to Machine Learning",
    "Power BI Avançado",
    "Fundamentos de Dados TI",
    "APIs e Microsserviços REST"
  ];

  return (
    <section id="education" className="education">
      <div className="section-header">
        <span className="section-tag">
          Formação
        </span>

        <h2>
          Formação acadêmica e desenvolvimento contínuo.
        </h2>

        <p>
          Graduações, pós-graduação, mestrado e certificações
          voltadas para ciência, tecnologia e análise de dados.
        </p>
      </div>

      <div className="education-grid">
        {education.map((item) => (
          <div
            className="education-card"
            key={item.institution}
          >
            <h3>{item.degree}</h3>

            <h4>{item.institution}</h4>

            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <div className="certifications-card">
        <div className="certifications-header">
          <div>
            <h3>Certificações</h3>

            <p>
              Destaque para algumas certificações relacionadas a
              dados, programação, analytics e tecnologia.
            </p>
          </div>

          <a
            href="https://github.com/Gbcustoias/Gbcustoias/blob/main/CERTIFICACOES.md"
            target="_blank"
            rel="noreferrer"
            className="certifications-link"
          >
            Ver todas →
          </a>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert) => (
            <span key={cert}>
              {cert}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;