import "./Screen.css"
import { useState } from "react"
import React, { useEffect } from 'react';

function Screen() {

    const [posY,setPosY] = useState(0)
    const gravidade = 2
    function grav() {
        setPosY((prev) => prev + 2)
    }

    useEffect(() => {
        if (posY + 1 < 480) {
            const interval = setInterval(grav, 10); 
            return () => clearInterval(interval);
        } else { setPosY(posY+1)}
     }, []);

    return (
        <div id="tela">
            <div style={{top: posY, position: 'relative'}} id="objct"></div>
        </div>
    )
    }

export default Screen