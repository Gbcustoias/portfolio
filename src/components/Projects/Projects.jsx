import "./Projects.css";

function Projects() {
  const featuredProjects = [
    {
      title: "Observatório CNES",
      category: "Data Analytics",
      impact: "Dados Públicos • Saúde • Dashboards",
      description:
        "Plataforma orientada a dados para análise de estabelecimentos de saúde brasileiros utilizando APIs, visualização geográfica, indicadores e dashboards interativos.",
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
      impact: "Governança • Automação • Relatórios",
      description:
        "Solução corporativa desenvolvida para automatizar a geração de relatórios executivos e indicadores estratégicos em ambiente empresarial.",
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
      impact: "Pesquisa • IA • Saúde",
      description:
        "Aplicação de Machine Learning para investigação biomédica utilizando modelos supervisionados e técnicas avançadas de interpretabilidade.",
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

        <h2>
          Aplicando dados, tecnologia e pesquisa em problemas reais.
        </h2>

        <p>
          Projetos desenvolvidos em ambientes acadêmicos,
          corporativos e tecnológicos, demonstrando aplicação
          prática de Analytics, Business Intelligence,
          Machine Learning e Desenvolvimento de Software.
        </p>
      </div>

      <div className="featured-projects">
        {featuredProjects.map((project) => (
          <div key={project.title} className="project-card">

            <div className="project-header">
              <span className="project-category">
                {project.category}
              </span>

              <span className="project-impact">
                {project.impact}
              </span>
            </div>

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