import CardProfessor from "./CardProfessor";

function ListaProfessores(props) {
    const cards = [];

    for (let i = 0; i< props.professores.length; i++) {
        const aluno = props.professores[i];
        cards.push(
            <CardProfessor
                key={aluno.id}
                professor={aluno}
                aoExcluir={props.aoExcluir}
            />
        );
    }

    return (
        <div className="lista-professores lista">
            {cards}
        </div>
    );
}

export default ListaProfessores;