import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Escopo from './componentes/Escopo'
import Redux from './componentes/Redux'
import MeuComponente from './componentes/MeuComponente'
import Change from './componentes/Change'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Change />
    </>
  )
}

export default App
