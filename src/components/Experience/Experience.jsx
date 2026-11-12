import "./Experience.css";

function Experience() {
  const experiences = [
    {
      organization: "Vivo",
      role: "Estagiário • Governança de Portfólio",
      description:
        "Atuação em automação de processos, indicadores e suporte à tomada de decisão através da análise de dados.",
      highlights: [
        "SQL",
        "Python",
        "Power BI",
        "Excel",
        "Power Automate",
        "Analytics"
      ]
    },
    {
      organization: "Pesquisa Científica",
      role: "Mestrado em Ciências • USP",
      description:
        "Desenvolvimento de pesquisa experimental com foco em bioestatística, análise de dados e interpretação de resultados.",
      highlights: [
        "Estatística",
        "Análise de Dados",
        "Pesquisa Experimental",
        "Metodologia Científica",
        "Publicação Científica"
      ]
    },
    {
      organization: "Docência Universitária",
      role: "Professor Universitário",
      description:
        "Ministração de disciplinas ligadas à bioestatística, pesquisa científica e comunicação técnica.",
      highlights: [
        "Bioestatística",
        "Pesquisa Científica",
        "Comunicação",
        "Didática",
        "Análise Crítica"
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="section-header">
        <span className="section-tag">
          Experiência
        </span>

        <h2>
          Um pouco da minha experiência profissional.
        </h2>

        <p>
          Experiências que contribuíram para minha atuação em
          ciência, tecnologia, automação e análise de dados.
        </p>
      </div>

      <div className="experience-grid">
        {experiences.map((exp) => (
          <div
            className="experience-card"
            key={exp.organization}
          >
            <h3>{exp.organization}</h3>

            <h4>{exp.role}</h4>

            <p>{exp.description}</p>

            <div className="skills-title">
              Skills
            </div>

            <div className="experience-tags">
              {exp.highlights.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;