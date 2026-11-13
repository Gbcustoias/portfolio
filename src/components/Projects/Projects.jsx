import "./Projects.css";

function Projects() {
  const featuredProjects = [
  {
    title: "Observatório CNES",
    category: "Data Analytics",
    github: "https://github.com/Gbcustoias/saes-cnes",
    description:
      "Aplicação para análise de estabelecimentos de saúde utilizando dados públicos, filtros avançados, dashboards e visualização geográfica.",
    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "REST API"
    ],
    skills: [
      "Backend",
      "Analytics",
      "Data Visualization"
    ]
  },
  {
    title: "Jira Analytics Reporter",
    category: "Business Intelligence",
    github: "https://github.com/Gbcustoias/Relatorio_Jira",
    description:
      "Solução corporativa para automatizar a geração de indicadores, relatórios executivos e consolidação de informações estratégicas.",
    technologies: [
      "Python",
      "Pandas",
      "DuckDB",
      "Matplotlib"
    ],
    skills: [
      "Business Intelligence",
      "Data Analysis",
      "Automation"
    ]
  },
  {
    title: "Predição de Mutação ALDH2",
    category: "Machine Learning",
    github: "https://github.com/Gbcustoias/ML-ALDH2",
    description:
      "Projeto de pesquisa utilizando algoritmos de Machine Learning para análise preditiva em contexto biomédico.",
    technologies: [
      "Python",
      "Scikit-Learn",
      "XGBoost",
      "SHAP"
    ],
    skills: [
      "Machine Learning",
      "Modelagem",
      "Pesquisa Científica"
    ]
  },
  {
    title: "TBCA Scraping",
    category: "Data Collection",
    github: "https://github.com/Gbcustoias/tbca-scraping",
    description:
      "Automação de coleta, tratamento e estruturação de dados da Tabela Brasileira de Composição de Alimentos para aplicações analíticas.",
    technologies: [
      "Python",
      "BeautifulSoup",
      "Requests"
    ],
    skills: [
      "Web Scraping",
      "Data Collection",
      "Data Cleaning"
    ]
  },
  {
    title: "SQL Analytics para Clínica Nutricional",
    category: "Data Analytics",
    github: "https://github.com/Gbcustoias/BD_clinica-nutricao",
    description:
      "Estruturação e análise de indicadores voltados para acompanhamento de atendimentos e geração de insights operacionais.",
    technologies: [
      "SQL",
      "Excel",
      "Analytics"
    ],
    skills: [
      "SQL",
      "Data Analysis",
      "Business Intelligence"
    ]
  }
];

  const secondaryProjects = [
  "NutrIA",
  "API Spring Boot",
  "TecBook VBA"
];

  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <span className="section-tag">
          Projetos
        </span>

        <h2>
          Alguns projetos desenvolvidos ao longo da minha trajetória.
        </h2>

        <p>
          Soluções aplicadas em contextos acadêmicos,
          corporativos e tecnológicos envolvendo análise
          de dados, automação, desenvolvimento de software
          e Machine Learning.
        </p>
      </div>

      <div className="featured-projects">
        {featuredProjects.map((project) => (
          <a
            key={project.title}
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="project-card"
          >
            <span className="project-category">
              {project.category}
            </span>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="project-section">
              <span className="section-label">
                Tecnologias
              </span>

              <div className="project-tags">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>

            <div className="project-section">
              <span className="section-label">
                Competências Desenvolvidas
              </span>

              <div className="project-tags">
                {project.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>

            <span className="learn-more">
              Saiba mais →
            </span>
          </a>
        ))}
      </div>

      <div className="secondary-projects">
        <h3>Projetos Complementares</h3>

        <div className="secondary-grid">
          {secondaryProjects.map((project) => (
            <div
              key={project}
              className="secondary-card"
            >
              {project}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;