import "./Contact.css";

import {
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaGraduationCap,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="section-header">
        <span className="section-tag">Conexões</span>

        <h2>
          Profissionalmente conectado entre pesquisa,
          dados e tecnologia.
        </h2>

        <p>
          Atualmente atuando na Vivo, com foco em Analytics,
          Automação e Tecnologia, construindo soluções que
          transformam dados em informação para tomada de decisão.
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

          <div>
            <h3>LinkedIn</h3>
            <p>Rede profissional</p>
          </div>
        </a>

        <a
          href="https://github.com/Gbcustoias/"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <FaGithub />

          <div>
            <h3>GitHub</h3>
            <p>Projetos e código</p>
          </div>
        </a>

        <a
          href="https://lattes.cnpq.br/7873063857752307"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <FaGraduationCap />

          <div>
            <h3>Lattes</h3>
            <p>Produção acadêmica</p>
          </div>
        </a>

        <div className="contact-card location-card">
          <FaMapMarkerAlt />

          <div>
            <h3>Localização</h3>
            <p>São Paulo, Brasil</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;