import "./Hero.css";
import profile from "../../assets/profile.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        <span className="hero-badge">
          Analista de Sistemas Jr. • Vivo
        </span>

        <h1>
          Data Analytics,
          <br />
          Automation &
          <br />
          Technology
        </h1>

        <p className="hero-description">
          Profissional com formação científica avançada,
          experiência acadêmica e atuação corporativa
          desenvolvendo soluções orientadas por dados
          para apoiar a tomada de decisão.
        </p>

        <div className="hero-tags">
          <span>Data Analytics</span>
          <span>Business Intelligence</span>
          <span>Automação</span>
          <span>Pesquisa Científica</span>
        </div>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            Ver Projetos
          </a>

          <a
            href="SEU_LINKEDIN"
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
            <h3>Dados</h3>
            <p>Analytics & BI</p>
          </div>

          <div className="metric-card">
            <h3>Vivo</h3>
            <p>Atuação Corporativa</p>
          </div>

        </div>

      </div>

      <div className="hero-image">
        <img
          src={profile}
          alt="Giovani Boldrini Custoias"
        />
      </div>
    </section>
  );
}

export default Hero;