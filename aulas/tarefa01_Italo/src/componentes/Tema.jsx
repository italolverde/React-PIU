import { useState } from "react"

export default function Tema() {

    const [modoescuro, setModoescuro] = useState(false)
    const cards = document.getElementsByClassName('cards')
    function changecolormode(){
        if (!modoescuro) {
            document.body.style.backgroundColor = "#101010"
            document.body.style.color = "white"
            setModoescuro(true)
        } else {
            document.body.style.backgroundColor = "#fefefe"
            document.body.style.color = "#101010"
            setModoescuro(false)
        }
    }

    return (
        <>
            <button onClick={changecolormode}>Alterar tema</button>
        </>
    )
}