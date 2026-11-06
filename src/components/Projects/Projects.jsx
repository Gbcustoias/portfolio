import "./Projects.css";

function Projects() {
  const featuredProjects = [
    {
      title: "Observatório CNES",
      category: "Data Analytics",
      description:
        "Sistema orientado a dados para análise de estabelecimentos de saúde utilizando APIs, dashboards, mapas e indicadores estatísticos.",
      technologies: [
        "Java",
        "Spring Boot",
        "PostgreSQL",
        "REST APIs",
        "Dashboards",
        "Mapas"
      ]
    },
    {
      title: "Jira Analytics Reporter",
      category: "Business Intelligence",
      description:
        "Solução corporativa para geração automatizada de relatórios executivos, indicadores e análises voltadas à governança de dados.",
      technologies: [
        "Python",
        "Pandas",
        "DuckDB",
        "Matplotlib",
        "ReportLab"
      ]
    },
    {
      title: "Predição de Mutação ALDH2",
      category: "Machine Learning",
      description:
        "Projeto de pesquisa biomédica utilizando algoritmos de Machine Learning e interpretabilidade para análise preditiva.",
      technologies: [
        "Python",
        "Scikit-Learn",
        "XGBoost",
        "CatBoost",
        "SHAP",
        "Boruta"
      ]
    }
  ];

  const secondaryProjects = [
    "TBCA Scraping",
    "SQL Analytics para Clínica Nutricional",
    "NutrIA",
    "API Spring Boot",
    "TecBook VBA"
  ];

  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <span className="section-tag">Projetos</span>

        <h2>Projetos que demonstram aplicação prática de dados e tecnologia.</h2>

        <p>
          Soluções desenvolvidas em contextos acadêmicos, corporativos
          e tecnológicos, com foco em análise de dados, automação,
          inteligência de negócios e desenvolvimento de software.
        </p>
      </div>

      <div className="featured-projects">
        {featuredProjects.map((project) => (
          <div key={project.title} className="project-card">
            <span className="project-category">
              {project.category}
            </span>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="project-tags">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="secondary-projects">
        <h3>Projetos Complementares</h3>

        <div className="secondary-grid">
          {secondaryProjects.map((project) => (
            <div key={project} className="secondary-card">
              {project}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;