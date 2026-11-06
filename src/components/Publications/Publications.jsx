import "./Publications.css";

function Publications() {
  return (
    <section id="publications" className="publications">
      <div className="section-header">
        <span className="section-tag">
          Pesquisa & Publicações
        </span>

        <h2>
          Pesquisa científica como fundamento da capacidade analítica.
        </h2>

        <p>
          A experiência em pesquisa científica contribuiu para o
          desenvolvimento de competências em estatística,
          metodologia experimental, interpretação de dados
          e comunicação de resultados baseada em evidências.
        </p>
      </div>

      <div className="publication-card">
        <span className="publication-type">
          Dissertação de Mestrado
        </span>

        <h3>
          Efeitos da suplementação de β-hidroxi-β-metilbutirato (HMB)
          sobre o dano muscular induzido pelo exercício resistido
        </h3>

        <h4>
          Universidade de São Paulo (USP)
        </h4>

        <p>
          Pesquisa desenvolvida com foco na avaliação dos efeitos
          da suplementação de HMB sobre marcadores associados ao
          dano muscular provocado pelo exercício resistido.
        </p>

        <p>
          O trabalho envolveu planejamento experimental,
          coleta de dados, análise estatística,
          interpretação crítica de resultados e produção científica.
        </p>

        <div className="publication-tags">
          <span>Pesquisa Experimental</span>
          <span>Bioestatística</span>
          <span>Análise de Dados</span>
          <span>Metodologia Científica</span>
          <span>Produção Científica</span>
        </div>
      </div>

      <div className="competencies-card">
        <h3>Competências Desenvolvidas</h3>

        <ul>
          <li>Análise Estatística</li>
          <li>Interpretação de Resultados</li>
          <li>Construção de Hipóteses</li>
          <li>Validação de Evidências</li>
          <li>Pesquisa Experimental</li>
          <li>Produção Científica</li>
          <li>Comunicação Técnica</li>
        </ul>
      </div>
    </section>
  );
}

export default Publications;