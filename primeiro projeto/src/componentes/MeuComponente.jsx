// import { useState } from "react";



function MeuComponente() {
    let mensagem = "olá"
    // const [mensagem, setMessage] = useState("Mensagem 1")
    function mudarmsg() {
        let display = document.getElementById('h1')
        display.innerHTML = '<button>OUTRO BOTAO</button>'

    }
    return (
        <>
            <h1 id="h1">{mensagem}</h1>
            {/* <button onClick={() => {
                setMessage("Mensagem 2, fui clicado")
            }}>Clique aqui</button> */}
            <button onClick={mudarmsg} >Me clique</button>

        </>
    )

}

export default MeuComponente