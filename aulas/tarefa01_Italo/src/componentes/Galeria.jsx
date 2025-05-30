import { useState } from "react";
import Card from "./Card";

export default function Galeria({ protagonistas, champions, userchars, trocapersonagem, tipopersonagem }) {
  const lista =
    tipopersonagem === "protagonistas"
      ? protagonistas
      : tipopersonagem === "champions"
      ? champions
      : userchars;

  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
      {lista.map((personagem) => (
        <Card
          personagem={personagem}
          key={`${tipopersonagem}-${personagem.nome}`}
          nome={personagem.nome}
          imagem={personagem.imagem}
          descricao={personagem.descricao}
          funcao={trocapersonagem}
        />
      ))}
    </div>
  );
}    

