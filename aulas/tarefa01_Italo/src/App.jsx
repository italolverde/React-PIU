import { useState } from 'react'
import './App.css'
import Tema from './componentes/Tema'
import Card from './componentes/Card'
import Galeria from './componentes/Galeria'
import Detalhes from './componentes/Detalhes'

function App() {

  return (
    <>
      <Tema />
      <Galeria />
      <Detalhes />
    </>
  )
}

export default App
