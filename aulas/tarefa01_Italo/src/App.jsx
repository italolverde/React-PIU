import { useState } from 'react'
import './App.css'
import Tema from './componentes/Tema'
import Card from './componentes/Card'
import Galeria from './componentes/Galeria'
import Detalhes from './componentes/Detalhes'

import frisk from "./assets/frisk.jpg"
import gon from "./assets/gon.webp"
import kate from "./assets/kate.png"
import luffy from "./assets/luffy.webp"
import max from "./assets/max.png"
import frieren from "./assets/frieren.png"


function App() {

  const [personagemselecionado,setPersonagemselecionado] = useState(null)

  const personagens = [
    { nome: "Frisk", imagem: frisk, descricao: "Apenas uma criança. Protagonista do jogo Undertale" },
    { nome: "Gon Freecss", imagem: gon, descricao: "Um hunter que ta procurando o pai que foi comprar leite. Protagonista do anime Hunter x Hunter" },
    { nome: "Kate Shadow", imagem: kate, descricao: "Uma criança da familia Shadow. Protagonista do anime Shadows House" },
    { nome: "Monkey D. Luffy", imagem: luffy, descricao: "O futuro rei dos piratas. Protagonista do anime One Piece" },
    { nome: "Max Caulfield", imagem: max, descricao: "Uma estudante com o poder de voltar no tempo. Protagonista do jogo Life is Strange" },
    { nome: "Frieren ", imagem: frieren, descricao: "Uma maga elfa caçadora de demonios. Protagonista de Sousou no Frieren" },
  ]

  function selecionar(personagem) {
    setPersonagemselecionado(personagem)
    console.log(personagem.nome)
  }

  return (
    <>
      <Tema />
      <Galeria personagens={personagens} trocapersonagem={selecionar} />     
      {personagemselecionado ? (
        <Detalhes nome={personagemselecionado.nome} imagem = {personagemselecionado.imagem} descricao={personagemselecionado.descricao} />
      ) : (
        <p>Selecione um personagem para ver os detalhes</p>
      )}
    </>
  )
}

export default App

