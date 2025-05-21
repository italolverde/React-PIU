import { useState } from "react";

export default function Galeria({nome,imagem}) {
    return(
        <div>
            <img src={imagem} />
            <h3>{nome}</h3>
        </div>
    )
}