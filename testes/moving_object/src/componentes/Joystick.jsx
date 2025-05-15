import { useState } from "react"

function Joystick() {
    let [movingup, setMovingup] = useState(false);
    let [movingleft, setMovingleft] = useState(false);
    let [movingdown, setMovingdown] = useState(false);
    let [movingright, setMovingright] = useState(false);

    return (
        <div id="pad">

            <button id="up"
            onMouseDown={setMovingup}
            > ↑ </button>
            
            <button id="left"
            > ← </button>

            <button id="down"
            > ↓ </button>

            <button id="right"
            > → </button>

        </div>
    )
}

export default Joystick