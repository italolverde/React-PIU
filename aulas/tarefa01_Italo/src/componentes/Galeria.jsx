import { useState } from "react";
import Card from "./Card";

export default function Galeria({ protagonistas, champions, trocapersonagem, tipopersonagem }) {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>   
      {tipopersonagem == "protagonistas" ?   
        protagonistas.map((personagem) => (
          <Card
            personagem = {personagem}
            key={personagem.nome}
            nome={personagem.nome}
            imagem={personagem.imagem}
            descricao={personagem.descricao}
            funcao = {trocapersonagem}
          />
        )) : champions.map((personagem) => (
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
