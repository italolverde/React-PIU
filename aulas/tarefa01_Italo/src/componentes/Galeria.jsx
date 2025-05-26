import { useState } from "react";
import Card from "./Card";

import frisk from "../assets/frisk.jpg";
import gon from "../assets/gon.webp";
import kate from "../assets/kate.jpg";
import luffy from "../assets/luffy.webp";
import orea_seca from "../assets/orea_seca.webp";
import zoro_vascaino from "../assets/zoro_vasco.jpg";

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
