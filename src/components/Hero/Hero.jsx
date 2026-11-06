import "./Hero.css";
import profile from "../../assets/profile.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-tag">
          Analista de Sistemas Jr.
        </span>

        <h1>
          Giovani
          <br />
          Boldrini
        </h1>

        <p>
          Desenvolvedor Full Stack com foco em Java,
          Spring Boot, React e PostgreSQL.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            Ver Projetos
          </a>

          <a
            href="https://github.com/Gbcustoias"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={profile} alt="Giovani Boldrini" />
      </div>
    </section>
  );
}

export default Hero;