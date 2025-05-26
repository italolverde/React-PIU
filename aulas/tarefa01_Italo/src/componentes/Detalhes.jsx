

export default function Detalhes(perso) {

    return (
        <>
            <h2>{perso.nome}</h2>
            <img src={perso.imagem} />
            <p>{perso.descricao}</p>
        </>
    )
}