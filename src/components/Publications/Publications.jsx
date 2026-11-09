import "./Publications.css";

function Publications() {
  const competencies = [
    "Análise Estatística",
    "Interpretação de Resultados",
    "Construção de Hipóteses",
    "Validação de Evidências",
    "Pesquisa Experimental",
    "Produção Científica",
    "Comunicação Técnica",
    "Metodologia Científica"
  ];

  return (
    <section id="publications" className="publications">
      <div className="section-header">
        <span className="section-tag">
          Pesquisa & Publicações
        </span>

        <h2>
          Ciência como fundamento da capacidade analítica.
        </h2>

        <p>
          Antes da atuação em tecnologia e analytics,
          o desenvolvimento profissional esteve fortemente
          ligado à pesquisa científica, estatística e
          interpretação de evidências.
        </p>
      </div>

      <div className="publication-highlight">

        <div className="publication-main">

          <span className="publication-type">
            Dissertação de Mestrado
          </span>

          <h3>
            Efeitos da suplementação de
            β-hidroxi-β-metilbutirato (HMB)
            sobre o dano muscular induzido
            pelo exercício resistido
          </h3>

          <h4>
            Universidade de São Paulo (USP)
          </h4>

          <p>
            Pesquisa experimental desenvolvida para
            avaliar os efeitos da suplementação de HMB
            sobre marcadores de dano muscular induzido
            pelo exercício resistido.
          </p>

          <p>
            O estudo envolveu planejamento experimental,
            coleta e tratamento de dados, análises
            estatísticas, interpretação crítica dos
            resultados e produção científica.
          </p>

          <div className="publication-tags">
            <span>Bioestatística</span>
            <span>Análise de Dados</span>
            <span>Pesquisa Experimental</span>
            <span>Metodologia Científica</span>
            <span>Produção Científica</span>
          </div>
        </div>

        <div className="publication-side">

          <div className="publication-metric">
            <h3>USP</h3>
            <p>Mestrado em Ciências</p>
          </div>

          <div className="publication-metric">
            <h3>Dados</h3>
            <p>Análise Estatística</p>
          </div>

          <div className="publication-metric">
            <h3>Pesquisa</h3>
            <p>Experimental</p>
          </div>

        </div>
      </div>

      <div className="competencies-card">
        <h3>Competências Desenvolvidas</h3>

        <div className="competencies-grid">
          {competencies.map((item) => (
            <div key={item} className="competency-item">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Publications;