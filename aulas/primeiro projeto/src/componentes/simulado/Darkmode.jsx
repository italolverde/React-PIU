import { useState } from "react"

export default function Darkmode() {

    const [modoescuro, setModoescuro] = useState(false)

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
            <button onClick={changecolormode}>Clique</button>
        </>
    )
}