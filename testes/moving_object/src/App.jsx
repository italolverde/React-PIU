import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Screen from './componentes/Screen'
import Joystick from './componentes/Joystick'
import DraggableBox from './componentes/DraggableBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Screen />
    </>
  )
}

export default App
