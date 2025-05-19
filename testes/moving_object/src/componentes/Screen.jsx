import "./Screen.css"
import { useState } from "react"
import React, { useEffect } from 'react';

function Screen() {

    const [position,setPosition] = useState( { top:100,left:100 } )
    const handleKeyDown = (e) => {
        console.log('aa')
        setPosition((prev) => {
            const step = 2
            switch(e.key) {
                case "w":
                    return {...prev, top: prev.top - step}
                default:
                    return prev
                }
        })
    } 

    window.addEventListener("keydown", handleKeyDown);

    return (
        <div id="tela">
            <div style={{top:position.top,left:position.left,position: 'relative'}} id="objct"></div>
        </div>
    )
    }

export default Screen