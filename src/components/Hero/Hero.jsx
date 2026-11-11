import "./Hero.css";
import profile from "../../assets/profile.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        <span className="hero-badge">
          Analista de Sistemas Jr. • Mestre em Ciências
        </span>

        <h1>
          Ciência
          <br />
          Tecnologia
          <br />
          e Dados.
        </h1>

        <p className="hero-description">
          Mestre em Ciências pela USP e profissional de tecnologia na Vivo.
          Atuo no desenvolvimento de soluções voltadas para automação,
          suporte à tomada de decisão com base em analítica de dados.
        </p>

        <div className="hero-tags">
          <span>Data Analytics</span>
          <span>Data Science</span>
          <span>Business Intelligence</span>
          <span>Automation</span>
          <span>Scientific Research</span>
        </div>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            Ver Projetos
          </a>
        </div>

        <div className="hero-metrics">
          <div className="metric-card">
            <h3>USP</h3>
            <p>Mestrado em Ciências</p>
          </div>

          <div className="metric-card">
            <h3>Vivo</h3>
            <p>Tecnologia & Dados</p>
          </div>

          <div className="metric-card">
            <h3>8+</h3>
            <p>Projetos Relevantes</p>
          </div>

          <div className="metric-card">
            <h3>15+</h3>
            <p>Tecnologias Aplicadas</p>
          </div>
        </div>
      </div>

      <div className="hero-image-wrapper">

        <div className="glow glow-orange"></div>
        <div className="glow glow-purple"></div>
        <div className="hero-ring ring-1"></div>
        <div className="hero-ring ring-2"></div>
        <div className="hero-ring ring-3"></div>

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