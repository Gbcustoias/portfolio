import "./Skills.css";

function Skills() {
  const skills = [
    {
      name: "Python",
      level: 8,
      workedOn: [
        "Jira Analytics Reporter",
        "Predição ALDH2",
        "TBCA Scraping",
        "Vivo"
      ]
    },
    {
      name: "SQL",
      level: 7,
      workedOn: [
        "Vivo",
        "Observatório CNES",
        "SQL Analytics"
      ]
    },
    {
      name: "Power BI",
      level: 8,
      workedOn: [
        "Vivo",
        "Dashboards",
        "Indicadores"
      ]
    },
    {
      name: "Excel",
      level: 9,
      workedOn: [
        "Vivo",
        "Pesquisa Científica",
        "Indicadores"
      ]
    },
    {
      name: "Estatística",
      level: 8,
      workedOn: [
        "USP",
        "Pesquisa Científica",
        "Docência"
      ]
    },
    {
      name: "Machine Learning",
      level: 6,
      workedOn: [
        "Predição ALDH2",
        "XGBoost",
        "SHAP"
      ]
    },
    {
      name: "Data Analytics",
      level: 8,
      workedOn: [
        "Vivo",
        "CNES",
        "Jira Reporter"
      ]
    },
    {
      name: "PostgreSQL",
      level: 7,
      workedOn: [
        "Observatório CNES",
        "Spring Boot",
        "APIs"
      ]
    },
    {
      name: "Power Automate",
      level: 8,
      workedOn: [
        "Vivo",
        "Automação",
        "Governança"
      ]
    },
    {
      name: "Java",
      level: 5,
      workedOn: [
        "Observatório CNES",
        "Spring Boot",
        "APIs"
      ]
    },
    {
      name: "Data Visualization",
      level: 8,
      workedOn: [
        "Power BI",
        "CNES",
        "Dashboards"
      ]
    },
    {
      name: "Data Engineering",
      level: 4,
      workedOn: [
        "ETL",
        "DuckDB",
        "PostgreSQL"
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="section-header">
        <span className="section-tag">
          Competências
        </span>

        <h2>
          Algumas tecnologias e conhecimentos aplicados ao longo da minha trajetória.
        </h2>

        <p>
          Competências utilizadas em projetos, pesquisa científica
          e experiências profissionais.
        </p>
      </div>

      <div className="skills-dashboard">
        {skills.map((skill) => (
          <div
            className="skill-card"
            key={skill.name}
          >
            <div className="skill-top">
              <h3>{skill.name}</h3>

              <span className="skill-score">
                {skill.level}/10
              </span>
            </div>

            <div className="skill-level">
              {[...Array(10)].map((_, index) => (
                <div
                  key={index}
                  className={
                    index < skill.level
                      ? `signal-bar active bar-${index + 1}`
                      : `signal-bar bar-${index + 1}`
                  }
                />
              ))}
            </div>

            <div className="worked-section">
              <span className="worked-title">
                Trabalhado em:
              </span>

              <div className="worked-tags">
                {skill.workedOn.map((item) => (
                  <span key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;