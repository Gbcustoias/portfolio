import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">Giovani Boldrini</div>

      <nav>
        <a href="#about">Sobre</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projetos</a>
        <a href="#contact">Contato</a>
      </nav>
    </header>
  );
}

export default Header;