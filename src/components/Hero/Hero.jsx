import "./Hero.css";
import profile from "../../assets/profile.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        <span className="hero-badge">
          Vivo • Analytics • Tecnologia
        </span>

        <h1>
          Transformando Dados
          <br />
          em Informação
          <br />
          para Decisão
        </h1>

        <p className="hero-description">
          Profissional com formação científica avançada,
          atuação corporativa em tecnologia e experiência
          em análise de dados, automação e Business
          Intelligence.
        </p>

        <div className="hero-tags">
          <span>Data Analytics</span>
          <span>Business Intelligence</span>
          <span>Data Visualization</span>
          <span>Automation</span>
          <span>Scientific Research</span>
        </div>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            Explorar Projetos
          </a>

          <a
            href="https://www.linkedin.com/in/giovani-boldrini-custoias-63312516a"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            LinkedIn
          </a>
        </div>

        <div className="hero-metrics">

          <div className="metric-card">
            <h3>USP</h3>
            <p>Mestrado em Ciências</p>
          </div>

          <div className="metric-card">
            <h3>8+</h3>
            <p>Projetos de Dados</p>
          </div>

          <div className="metric-card">
            <h3>15+</h3>
            <p>Tecnologias Aplicadas</p>
          </div>

          <div className="metric-card">
            <h3>Analytics</h3>
            <p>Foco Profissional</p>
          </div>

        </div>
      </div>

      <div className="hero-image-wrapper">

        <div className="analytics-card">
          <span>Analytics Snapshot</span>

          <div className="analytics-bars">

            <div className="analytics-item">
              <label>Data Analytics</label>
              <div className="bar">
                <div className="fill analytics"></div>
              </div>
            </div>

            <div className="analytics-item">
              <label>Business Intelligence</label>
              <div className="bar">
                <div className="fill bi"></div>
              </div>
            </div>

            <div className="analytics-item">
              <label>Pesquisa Científica</label>
              <div className="bar">
                <div className="fill science"></div>
              </div>
            </div>

          </div>
        </div>

        <div className="hero-image">
          <img
            src={profile}
            alt="Giovani Boldrini Custoias"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;