import { useState } from "react";

export default function Detalhes() {

    const [nome,setNome] = useState(null)
    const [imagem, setImagem] = useState(null)
    const [descricao, setDescricao] = useState(null)

    function changeselected(nome,imagem,descricao) {
    
        setNome(nome)
        setImagem(imagem)
        setDescricao(descricao)
    }

    return (
        <>
            <h2>{nome}</h2>
            <img src={imagem} />
            <p>{descricao}</p>
        </>
    )
}