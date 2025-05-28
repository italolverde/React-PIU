import { useState } from "react";
import Card from "./Card";

export default function Galeria({ personagens, trocapersonagem }) {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
        {personagens.map((personagem) => (
          <Card
            personagem = {personagem}
            key={personagem.nome}
            nome={personagem.nome}
            imagem={personagem.imagem}
            descricao={personagem.descricao}
            funcao = {trocapersonagem}
          />
        ))}
      </div>
    </>
  );
}
