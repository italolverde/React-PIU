import { useState } from 'react'
import './App.css'
import Tema from './componentes/Tema'
import Card from './componentes/Card'
import Galeria from './componentes/Galeria'
import Detalhes from './componentes/Detalhes'

import frisk from "./assets/frisk.jpg"
import gon from "./assets/gon.webp"
import kate from "./assets/kate.jpg"
import luffy from "./assets/luffy.webp"
import max from "./assets/max.png"
import frieren from "./assets/frieren.png"


function App() {

  const [personagemselecionado,setPersonagemselecionado] = useState(null)

  const personagens = [
    { nome: "Frisk", imagem: frisk, descricao: "Protagonista do jogo Undertale" },
    { nome: "Gon Freecss", imagem: gon, descricao: "Protagonista do anime Hunter x Hunter" },
    { nome: "Kate Shadow", imagem: kate, descricao: "Protagonista do anime Shadows House" },
    { nome: "Monkey D. Luffy", imagem: luffy, descricao: "Protagonista do anime One Piece" },
    { nome: "Max Caulfield", imagem: max, descricao: "O caba mais desenrolado do mundo" },
    { nome: "Frieren ", imagem: frieren, descricao: "Nova escalação para o Vasco" },
  ]

  function selecionar(personagem) {
    setPersonagemselecionado(personagem)
    console.log(personagem.nome)
  }

  return (
    <>
      <Tema />
      <Galeria personagens={personagens} trocapersonagem={selecionar} />
      <Detalhes perso={personagemselecionado} />
    </>
  )
}

export default App
