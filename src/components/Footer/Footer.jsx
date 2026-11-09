import "./Footer.css";

import {
  FaGithub,
  FaLinkedin,
  FaGraduationCap,
} from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-brand">
          <h3>Giovani Boldrini Custoias</h3>

          <p>
            Data Analytics • Business Intelligence •
            Automação • Tecnologia
          </p>

          <span>
            Transformando dados em informação para apoiar
            decisões baseadas em evidências.
          </span>
        </div>

        <div className="footer-navigation">
          <h4>Navegação</h4>

          <a href="#journey">Jornada</a>
          <a href="#experience">Experiência</a>
          <a href="#projects">Projetos</a>
          <a href="#skills">Competências</a>
          <a href="#education">Formação</a>
        </div>

        <div className="footer-links">
          <h4>Presença Profissional</h4>

          <a
            href="https://www.linkedin.com/in/giovani-boldrini-custoias-63312516a"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
            LinkedIn
          </a>

          <a
            href="https://github.com/Gbcustoias/"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://lattes.cnpq.br/7873063857752307"
            target="_blank"
            rel="noreferrer"
          >
            <FaGraduationCap />
            Lattes
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {currentYear} Giovani Boldrini Custoias
        </p>

        <span>
          Data Analytics • Pesquisa Científica • Tecnologia
        </span>
      </div>
    </footer>
  );
}

export default Footer;