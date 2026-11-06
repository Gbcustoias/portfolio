import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-brand">
          <h3>Giovani Boldrini Custoias</h3>

          <p>
            Data Analytics • Business Intelligence •
            Automation • Technology
          </p>
        </div>

        <div className="footer-links">
          <a href="#journey">Jornada</a>
          <a href="#experience">Experiência</a>
          <a href="#projects">Projetos</a>
          <a href="#skills">Competências</a>
          <a href="#education">Formação</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {currentYear} Giovani Boldrini Custoias.
          Construído com React.
        </p>
      </div>
    </footer>
  );
}

export default Footer;