import { Link } from "react-router-dom";

function BarraNavegacao() {
  return (
    <nav className="barra-navegacao">
      <Link to="/">Início</Link>

      <div className="menu-grupo">
        Listas
        <div className="menu-lista">
          <Link to="/alunos">Alunos</Link>
          <Link to="/professores">Professores</Link>
        </div>
      </div>

      <div className="menu-grupo">
        Cadastro
        <div className="menu-lista">
          <Link to="/cadastro-aluno">Aluno</Link>
          <Link to="/cadastro-professor">Professor</Link>
        </div>
      </div>
    </nav>
  );
}

export default BarraNavegacao;
