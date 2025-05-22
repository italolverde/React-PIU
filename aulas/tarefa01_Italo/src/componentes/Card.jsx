import { useState } from "react";
import Detalhes from "./Detalhes";
import changeselected from "./Detalhes.jsx"

export default function Card({nome,imagem,descricao}) {
    return(
        <div onClick={() => changeselected(nome, imagem, descricao)}>
            <img style={{height:"150px",width:"150px", padding:"10px", border:"3px, solid, black"}}
             src={imagem} />
            <h3>{nome}</h3>
        </div>
    )
}