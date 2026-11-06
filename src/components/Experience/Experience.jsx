import "./Experience.css";

function Experience() {
  const experiences = [
    {
      company: "Vivo",
      role: "Estagiário - Governança de Portfólio.",
      period: "Atual",
      description:
        "Atuação em iniciativas orientadas por dados, desenvolvimento de automações e geração de indicadores para suporte à tomada de decisão. Utilização de SQL, Python, Power BI, Excel e Power Automate para análise, governança e otimização de processos.",
      skills: [
        "SQL",
        "Python",
        "Power BI",
        "Excel",
        "Power Automate",
        "Governança de Dados"
      ]
    },
    {
      company: "Pesquisa Científica",
      role: "Mestrado em Ciências - USP",
      period: "Pesquisa Acadêmica",
      description:
        "Desenvolvimento e condução de estudos experimentais com foco em bioestatística, metodologia científica, análise de dados e interpretação de resultados aplicados à saúde.",
      skills: [
        "Estatística",
        "Metodologia Científica",
        "Análise de Dados",
        "Pesquisa Experimental",
        "Produção Científica"
      ]
    },
    {
      company: "Docência Universitária",
      role: "Professor Universitário",
      period: "Experiência Acadêmica",
      description:
        "Ministração de disciplinas relacionadas à bioestatística, pesquisa científica e nutrição, contribuindo para formação acadêmica baseada em evidências.",
      skills: [
        "Bioestatística",
        "Pesquisa Científica",
        "Comunicação",
        "Didática",
        "Produção de Conteúdo"
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="section-header">
        <span className="section-tag">Experiência</span>

        <h2>
          Experiências que conectam ciência, dados e tecnologia.
        </h2>

        <p>
          Minha trajetória profissional reúne experiência corporativa,
          pesquisa científica e docência, formando uma base sólida para
          construir soluções orientadas por dados.
        </p>
      </div>

      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <span className="experience-period">
              {exp.period}
            </span>

            <h3>{exp.company}</h3>

            <h4>{exp.role}</h4>

            <p>{exp.description}</p>

            <div className="experience-tags">
              {exp.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;