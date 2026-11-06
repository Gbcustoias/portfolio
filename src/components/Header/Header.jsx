import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <span className="logo-name">
          Giovani Boldrini
        </span>

        <span className="logo-role">
          Data Analytics & Technology
        </span>
      </div>

      <nav className="header-nav">
        <a href="#journey">Jornada</a>
        <a href="#experience">Experiência</a>
        <a href="#projects">Projetos</a>
        <a href="#skills">Competências</a>
        <a href="#education">Formação</a>
        <a href="#publications">Pesquisa</a>
        <a href="#contact">Contato</a>
      </nav>

      <div className="header-actions">
        <a
          href="SEU_GITHUB"
          target="_blank"
          rel="noreferrer"
          className="header-button secondary"
        >
          GitHub
        </a>

        <a
          href="SEU_LINKEDIN"
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