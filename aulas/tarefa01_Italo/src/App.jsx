import { useState } from 'react'
import './App.css'
import Tema from './componentes/Tema'
import Card from './componentes/Card'
import Galeria from './componentes/Galeria'
import Detalhes from './componentes/Detalhes'
import Switcher from './componentes/Switcher'
import Form from './componentes/Form'


import frisk from "./assets/protagonistas/frisk.jpg"
import gon from "./assets/protagonistas/gon.webp"
import kate from "./assets/protagonistas/kate.png"
import luffy from "./assets/protagonistas/luffy.webp"
import max from "./assets/protagonistas/max.png"
import frieren from "./assets/protagonistas/frieren.png"

import blue from "./assets/champions/blue.jpg"
import lance from "./assets/champions/lance.png"
import steven from "./assets/champions/steven.png"
import wallace from "./assets/champions/wallace.jpg"
import cynthia from "./assets/champions/cynthia.png"
import iris from "./assets/champions/iris.jpg"

function App() {

  const [personagemselecionado,setPersonagemselecionado] = useState(null)
  const [tipopersonagem, setTipopersonagem] = useState("protagonistas")

  const protagonistas = [
    { nome: "Frisk", imagem: frisk, descricao: "Apenas uma criança. Protagonista do jogo Undertale" },
    { nome: "Gon Freecss", imagem: gon, descricao: "Um hunter que ta procurando o pai que foi comprar leite. Protagonista do anime Hunter x Hunter" },
    { nome: "Brian Kevelyn", imagem: kate, descricao: "Uma criança da familia Shadow. Protagonista de Shadows House" },
    { nome: "Monkey D. Luffy", imagem: luffy, descricao: "O futuro rei dos piratas. Protagonista do anime One Piece" },
    { nome: "Max Caulfield", imagem: max, descricao: "Uma estudante com o poder de voltar no tempo. Protagonista do jogo Life is Strange" },
    { nome: "Frieren ", imagem: frieren, descricao: "Uma maga elfa caçadora de demonios. Protagonista de Sousou no Frieren" },
  ]

  const champions = [
    { nome: "Blue Oak", imagem: blue, descricao: "Pesquisador pokemon e campeão da liga de Kanto"},
    { nome: "Lance", imagem: lance, descricao: "Treinador de dragões campeão da liga de Johto e membro da Elite four de Kanto"},
    { nome: "Steven Stone", imagem: steven, descricao: "Arqueólogo e campeão da liga de Hoenn"},
    { nome: "wallace", imagem: wallace, descricao: "Campeão da liga de Hoenn"},
    { nome: "Cynthia", imagem: cynthia, descricao: "Pesquisadora da mitologia pokemon e campeã da liga de Sinnoh"},
    { nome: "Iris", imagem: iris, descricao: "Treinadora de dragões e nova campeã da liga de Unova"}
  ]

  const [userchars, setUserchars] = useState([])

  function adduserchar(char) {
    setUserchars([...userchars, char])
    console.log(userchars)
  }

  function selecionar(personagem) {
    setPersonagemselecionado(personagem)
    console.log(personagem.nome)
  }

  function trocartipo() {
    console.log(tipopersonagem)
    if (tipopersonagem == "protagonistas") {
      setTipopersonagem("champions")
    } else {
      setTipopersonagem("protagonistas")
    }
  }
  return (
    <>
      <Form adcionar={adduserchar}/>
      <Tema />
      <Switcher clickfunction={trocartipo} tipopersonagem={tipopersonagem} />
      <Galeria protagonistas={protagonistas} champions={champions} trocapersonagem={selecionar} tipopersonagem={tipopersonagem} />     
      {personagemselecionado ? (
        <Detalhes nome={personagemselecionado.nome} imagem = {personagemselecionado.imagem} descricao={personagemselecionado.descricao} />
      ) : (
        <p>Selecione um personagem para ver os detalhes</p>
      )}
    </>
  )
}

export default App

