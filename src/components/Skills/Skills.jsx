import "./Skills.css";

function Skills() {
  const skillGroups = [
    {
      category: "Dados",
      skills: [
        { name: "Python", level: 8 },
        { name: "SQL", level: 7 },
        { name: "Power BI", level: 8 },
        { name: "Excel", level: 9 },
        { name: "Pandas", level: 7 },
        { name: "Estatística", level: 8 },
        { name: "Machine Learning", level: 6 }
      ]
    },
    {
      category: "Analytics & BI",
      skills: [
        { name: "Data Analytics", level: 8 },
        { name: "Business Intelligence", level: 8 },
        { name: "Data Visualization", level: 8 },
        { name: "Data Cleaning", level: 8 },
        { name: "Data Storytelling", level: 7 }
      ]
    },
    {
      category: "Automação",
      skills: [
        { name: "Power Automate", level: 8 },
        { name: "Web Scraping", level: 8 },
        { name: "Automação de Processos", level: 8 }
      ]
    },
    {
      category: "Desenvolvimento",
      skills: [
        { name: "Java", level: 5 },
        { name: "Spring Boot", level: 5 },
        { name: "JavaScript", level: 5 },
        { name: "React", level: 5 },
        { name: "HTML", level: 6 },
        { name: "CSS", level: 6 },
        { name: "FastAPI", level: 6 },
        { name: "PostgreSQL", level: 7 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="section-header">
        <span className="section-tag">Competências</span>

        <h2>
          Competências construídas entre ciência, dados e tecnologia.
        </h2>

        <p>
          Combinação de experiência analítica, pesquisa científica,
          automação e desenvolvimento para criação de soluções
          orientadas por dados.
        </p>
      </div>

      <div className="skill-groups">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.category}>
            <h3>{group.category}</h3>

            {group.skills.map((skill) => (
              <div className="skill-item" key={skill.name}>
                <div className="skill-header">
                  <span>{skill.name}</span>
                  <span>{skill.level}/10</span>
                </div>

                <div className="skill-bar">
                  <div
                    className="skill-fill"
                    style={{
                      width: `${skill.level * 10}%`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;