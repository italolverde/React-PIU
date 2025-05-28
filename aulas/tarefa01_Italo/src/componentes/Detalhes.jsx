import "./Detalhes.css"

export default function Detalhes({nome,imagem,descricao}) {
    if (!nome) {
        return(<></>)
    }
    
    return (
        <div className="detalhes">
            <h2>{nome}</h2>
            <img src={imagem} />
            <p>{descricao}</p>
        </div>
    )
}