import { useState } from "react";

export default function Form() {
    const [nome,setNome] = useState(null)
    const [imagem,setImagem] = useState(null)
    const [descricao,setDescricao] = useState(null)

    const handleChange = (event) => {
        setNome(event.target.value);
      };
    
      const handleSubmit = (event) => {
        event.preventDefault(); 
      };

      return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="nome" placeholder="Nome..." />
            <input type="url" name="imagem" placeholder="Url da imagem..." />
            <input type="text" name="descricao" />
        </form>
      )
}