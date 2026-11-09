import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <span className="logo-name">
          Giovani Boldrini
        </span>

        <span className="logo-role">
          Data Analytics • Technology
        </span>
      </div>

      <nav className="header-nav">
        <a href="#journey">Jornada</a>
        <a href="#experience">Experiência</a>
        <a href="#projects">Projetos</a>
        <a href="#skills">Competências</a>
        <a href="#education">Formação</a>
        <a href="#publications">Pesquisa</a>
        <a href="#contact">Conexões</a>
      </nav>

      <div className="header-actions">
        <a
          href="https://github.com/Gbcustoias/"
          target="_blank"
          rel="noreferrer"
          className="header-button secondary"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/giovani-boldrini-custoias-63312516a"
          target="_blank"
          rel="noreferrer"
          className="header-button primary"
        >
          LinkedIn
        </a>
      </div>
    </header>
  );
}

export default Header;