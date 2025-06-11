import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0)

  //Criando valores de altura e largura e manipulando direto no elemento pra ser mais rapido :)
  //Vou alterar eles checando direto na função que ta rodando o incrementar e decrementar
  //fiz funções separadas pra isso
  const [incrementosize, setIncrementosize] = useState('50px')
  const [decrementosize, setDecrementosize] = useState('50px')

  //Eu não sei o por que mas o set parece que roda separado do resto da função, coloquei os logs pra ver os valores
  //e ele parece que atualiza depois do código rodar, é bizarro
  // o que importa é que ta funcionando, fiz essas adições e subtrações pra compensar essa diferença
  function increase() {
    setCount((count) => count + 1)
    console.log(count+2)
    if (count+2 > 0) {
      //Se ficar positivo, volta o decremento pro tamanho normal de definição
      setDecrementosize('50px')
    } 
    if (count >= 10) {
      //Passar de 10, taca o valor do tamanho na lua
      setIncrementosize('200px')
    }
  }

  function decrease() {
    setCount((count) => count - 1)
    // Mesma coisa, se o contador cair de 10 ele volta o de incremento pro tamanho normal...
    if (count-1 <= 10) {
      setIncrementosize('50px')
    }
    // E se cair de 0 taca o tamanho do de decremento la pro alto
    if (count-1 < 0) {
      setDecrementosize('200px')
    }
  }

  return (
    <>
        {/*Dai aqui botei o style direto no elemento, width e height como o tamanho definido por state*/}
        <button style={{width:incrementosize, height:incrementosize }} onClick={increase}> +1 </button>
        <button style={{width:decrementosize, height:decrementosize }} onClick={decrease}> -1 </button>
        <p>Contador: {count}</p>
    </>
  )
}
