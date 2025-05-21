import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Escopo from './componentes/Escopo'
import Redux from './componentes/Redux'
import MeuComponente from './componentes/MeuComponente'
import Change from './componentes/Change'
import Darkmode from './componentes/simulado/darkmode'
import Galeria from './componentes/simulado/Galeria'
import foto from "./componentes/simulado/github_icon.png"

function App() {
  const github_icon = './componentes/simulado/github_icon.png'

  return (
    <>
      <Darkmode />
      <Galeria nome={"github"} imagem={foto} />
    </>
  )
}

export default App
