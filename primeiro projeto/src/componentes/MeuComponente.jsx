// import { useState } from "react";



function MeuComponente() {
    let contagem = 0
    // const [mensagem, setMessage] = useState("Mensagem 1")
    function mudarmsg() {
        let display = document.getElementById('h2')
        contagem++
        display.innerHTML += contagem
        

    }
    return (
        <>
            <h1>Contador</h1>
            <h2 id="h2">{contagem}</h2>
            {/* <button onClick={() => {
                setMessage("Mensagem 2, fui clicado")
            }}>Clique aqui</button> */}
            <button onClick={mudarmsg} >Me clique</button>

        </>
    )

}

export default MeuComponente