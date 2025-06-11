import { useState } from 'react'

import './App.css'
import Form from './components/Form'
import Task from './components/Task'
import Taskboard from './components/Taskboard'

function App() {
  const [errormsg,setErrormsg] = useState('')
  const [tarefas,setTarefas] = useState([])

  function adicionar(tarefa) {
    if (tarefas.some(t => t.nome === tarefa.nome)) {
      setErrormsg('Essa tarefa já existe');
      console.log('existe');
    } else {
      setTarefas([...tarefas, tarefa]);
    }
  }

  return (
    <>
      <p>{errormsg}</p>
      <Form adicionar={adicionar}/>
      <Taskboard tarefas={tarefas} />    
    </>
  )
}

export default App
