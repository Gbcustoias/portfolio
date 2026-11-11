import "./Header.css";
import { useEffect, useState } from "react";

function Header() {
  const words = [
    "Data Analytics",
    "Data Science",
    "Technology",
    "Science",
    "Development",
    "Business"
  ];

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));

        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));

        if (text === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 40 : 90);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <header className="header">
      <div className="header-logo">
        <span className="logo-name">
          Giovani Custoias
        </span>

        <span className="logo-role">
          {text}
          <span className="cursor">|</span>
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