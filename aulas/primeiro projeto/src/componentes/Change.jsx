import { useState } from "react"

export default function Change() {

    // Nome da variavel, função de atualização (set+variavel captalizada) = useState(valor inicial)
    let [valor, setValor] = useState(0)
    let [valor2, setValor2] = useState(0)
    let [valor3, setValor3] = useState(1)

    function sets() {
        setValor(valor+1)
        setValor2(valor2+1)
        setValor3(valor3= valor3*2)
    }
    return (
        <>
            <h1>{valor3}</h1>
            <p>{valor}+{valor2} = {valor+valor2}</p>
            <button onClick={sets}>Mim clique</button>
        </>
    )
}