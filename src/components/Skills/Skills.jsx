import "./Skills.css";

function Skills() {
  const skills = [
    {
      name: "Python",
      level: 8,
      category: "Dados",
      evidence: [
        "Jira Analytics Reporter",
        "Predição ALDH2",
        "TBCA Scraping",
        "Vivo"
      ]
    },
    {
      name: "SQL",
      level: 7,
      category: "Dados",
      evidence: [
        "Vivo",
        "Observatório CNES",
        "SQL Analytics"
      ]
    },
    {
      name: "Power BI",
      level: 8,
      category: "BI",
      evidence: [
        "Vivo",
        "Indicadores",
        "Dashboards"
      ]
    },
    {
      name: "Excel",
      level: 9,
      category: "Analytics",
      evidence: [
        "Vivo",
        "Pesquisa Científica",
        "Indicadores"
      ]
    },
    {
      name: "Estatística",
      level: 8,
      category: "Pesquisa",
      evidence: [
        "USP",
        "Pesquisa Científica",
        "Docência"
      ]
    },
    {
      name: "Machine Learning",
      level: 6,
      category: "Data Science",
      evidence: [
        "Predição ALDH2",
        "XGBoost",
        "SHAP"
      ]
    },
    {
      name: "Data Analytics",
      level: 8,
      category: "Analytics",
      evidence: [
        "Vivo",
        "CNES",
        "Jira Reporter"
      ]
    },
    {
      name: "Business Intelligence",
      level: 8,
      category: "Analytics",
      evidence: [
        "Power BI",
        "Jira Reporter",
        "Dashboards"
      ]
    }
  ];

  const getLevelName = (level) => {
    if (level <= 2) return "Iniciante";
    if (level <= 5) return "Intermediário";
    if (level <= 8) return "Avançado";
    return "Especialista";
  };

  return (
    <section id="skills" className="skills">
      <div className="section-header">
        <span className="section-tag">
          Competências
        </span>

        <h2>
          Competências sustentadas por experiência prática.
        </h2>

        <p>
          Cada competência apresentada está associada
          a projetos, experiências profissionais ou
          atividades de pesquisa em que foi aplicada.
        </p>
      </div>

      <div className="skills-dashboard">
        {skills.map((skill) => (
          <div
            className="skill-card"
            key={skill.name}
          >
            <div className="skill-top">
              <div>
                <h3>{skill.name}</h3>

                <span className="skill-level-name">
                  {getLevelName(skill.level)}
                </span>
              </div>

              <span className="skill-score">
                {skill.level}/10
              </span>
            </div>

            <div className="skill-bar">
              <div
                className="skill-fill"
                style={{
                  width: `${skill.level * 10}%`
                }}
              />
            </div>

            <div className="evidence-section">
              <span>Evidências</span>

              <div className="evidence-tags">
                {skill.evidence.map((item) => (
                  <span key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="skills-legend">
        <div>0-2 • Iniciante</div>
        <div>3-5 • Intermediário</div>
        <div>6-8 • Avançado</div>
        <div>9-10 • Especialista</div>
      </div>
    </section>
  );
}

export default Skills;