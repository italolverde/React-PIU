import { useState } from "react"

export default function Login() {
    const tela = document.getElementsByTagName('body')[0]
    
    const [login,setLogin] = useState()
    const [senha,setSenha] = useState()

    const handleChangeLogin = (event) => {
        setLogin(event.target.value)

    }
    const handleChangeSenha = (event) => {
        setSenha(event.target.value)
    }

    function confirmar() {
        if (senha == 'PIUprova') {
            tela.style.backgroundColor = 'black'
        } else {
            tela.style.backgroundColor = 'white'
        }
    }
    
    return (
        <>
        
            <label htmlFor="login">Login:</label>
            <input type="text" name="login" onChange={handleChangeLogin}/>
            
            <label htmlFor="senha">Senha:</label>
            <input type="text" name="senha" onChange={handleChangeSenha}/>

            <button onClick={confirmar}>Confirmar</button>
        </>

    )


}