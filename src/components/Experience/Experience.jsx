import "./Experience.css";

function Experience() {
  const experiences = [
    {
      organization: "Vivo",
      role: "Estagiário • Governança de Portfólio",
      badge: "Corporativo",
      description:
        "Atuação em análises de indicadores, automação de processos e suporte à tomada de decisão através de SQL, Python, Power BI, Excel e Power Automate.",
      highlights: [
        "Analytics",
        "Governança",
        "Power BI",
        "SQL",
        "Python",
        "Automação"
      ]
    },
    {
      organization: "Pesquisa Científica",
      role: "Mestrado em Ciências • USP",
      badge: "Pesquisa",
      description:
        "Condução de pesquisa experimental envolvendo bioestatística, metodologia científica, análise de dados e interpretação de resultados para produção de evidências científicas.",
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
      badge: "Educação",
      description:
        "Ministração de disciplinas relacionadas à bioestatística, pesquisa científica e nutrição, desenvolvendo comunicação técnica e pensamento analítico.",
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
          Ciência, negócio e tecnologia aplicados à tomada de decisão.
        </h2>

        <p>
          Minha experiência foi construída em diferentes contextos,
          mas sempre com o mesmo objetivo: transformar informação em
          conhecimento útil para apoiar decisões melhores.
        </p>
      </div>

      <div className="experience-grid">
        {experiences.map((exp) => (
          <div className="experience-card" key={exp.organization}>
            <span className="experience-badge">
              {exp.badge}
            </span>

            <h3>{exp.organization}</h3>

            <h4>{exp.role}</h4>

            <p>{exp.description}</p>

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