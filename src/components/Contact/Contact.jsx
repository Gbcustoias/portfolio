import "./Contact.css";

import {
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaArrowRight,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="section-header">
        <span className="section-tag">
          Presença Profissional
        </span>

        <h2>
          Conectando pesquisa, tecnologia e análise de dados.
        </h2>

        <p>
          Minha atuação combina experiência corporativa,
          formação científica e desenvolvimento de soluções
          orientadas por dados para apoiar decisões baseadas
          em evidências.
        </p>
      </div>

      <div className="contact-grid">
        <a
          href="https://www.linkedin.com/in/giovani-boldrini-custoias-63312516a"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <FaLinkedin />

          <div className="contact-content">
            <h3>LinkedIn</h3>
            <p>Experiência profissional e networking</p>
          </div>

          <FaArrowRight className="contact-arrow" />
        </a>

        <a
          href="https://github.com/Gbcustoias/"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <FaGithub />

          <div className="contact-content">
            <h3>GitHub</h3>
            <p>Projetos, código e desenvolvimento</p>
          </div>

          <FaArrowRight className="contact-arrow" />
        </a>

        <a
          href="https://lattes.cnpq.br/7873063857752307"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <FaGraduationCap />

          <div className="contact-content">
            <h3>Lattes</h3>
            <p>Pesquisa científica e produção acadêmica</p>
          </div>

          <FaArrowRight className="contact-arrow" />
        </a>

        <div className="contact-card location-card">
          <FaMapMarkerAlt />

          <div className="contact-content">
            <h3>Localização</h3>
            <p>São Paulo • Brasil</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
