import { useState } from "react";

export default function Form({adcionar}) {

    const [nome,setNome] = useState(null)
    const [imagem,setImagem] = useState(null)
    const [descricao,setDescricao] = useState(null)

    const handleChangenome = (event) => {
        setNome(event.target.value);
        console.log("nome: ", nome)
      };
      
      const handleChangeimagem = (event) => {
        setImagem(event.target.value);
        console.log("img: ", imagem)
      };
      
      const handleChangedescricao = (event) => {
        setDescricao(event.target.value);
        console.log("descrição: ", descricao)
      };
      
      const handleSubmit = (event) => {
        event.preventDefault(); 
        const personagem = {nome: nome, imagem: imagem, descricao:descricao}
        adcionar(personagem)
      };
      
      return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="nome" placeholder="Nome..." onChange={handleChangenome} />
            <input type="url" name="imagem" placeholder="Url da imagem..." onChange={handleChangeimagem} />
            <input type="text" name="descricao" placeholder="Descrição" onChange={handleChangedescricao} />
            <button type="submit">enviar</button>
        </form>
      )
}