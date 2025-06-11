import { useState } from "react";

export default function Form({adicionar}) {

    const [nome,setNome] = useState(null)

    const handleChangenome = (event) => {
        setNome(event.target.value);
        console.log("nome: ", nome)
      };
      
      const handleSubmit = (event) => {
        event.preventDefault(); 
        const tarefa = {nome: nome, terminada: false}
        adicionar(tarefa)
      };
      
      return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="nome" placeholder="Nome..." onChange={handleChangenome} />
            <button type="submit">Adcionar</button>
        </form>
      )
}