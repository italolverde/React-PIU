import "./Screen.css"
import { useState } from "react"
// import React, { useEffect } from 'react';

function Screen() {

    const [tabuleiro, setTabuleiro] = useState(Array(9).fill(null))
    const [vezdoX, setVezdoX] = useState(true)

    function handleclick(index) {
        const simbolo = vezdoX ? 'X' : 'O';

        let modtabuleiro = [...tabuleiro]
        if(modtabuleiro[index] == null) { 
            modtabuleiro[index] = simbolo 
            setTabuleiro(modtabuleiro)
            setVezdoX(!vezdoX)
        }
    }

    return (
        <div id="tela">
            <div className="peca" onClick={() => handleclick(0)}>{tabuleiro[0]}</div>
            <div className="peca" onClick={() => handleclick(1)}>{tabuleiro[1]}</div>
            <div className="peca" onClick={() => handleclick(2)}>{tabuleiro[2]}</div>
            <div className="peca" onClick={() => handleclick(3)}>{tabuleiro[3]}</div>
            <div className="peca" onClick={() => handleclick(4)}>{tabuleiro[4]}</div>
            <div className="peca" onClick={() => handleclick(5)}>{tabuleiro[5]}</div>
            <div className="peca" onClick={() => handleclick(6)}>{tabuleiro[6]}</div>
            <div className="peca" onClick={() => handleclick(7)}>{tabuleiro[7]}</div>
            <div className="peca" onClick={() => handleclick(8)}>{tabuleiro[8]}</div>
        </div>
    )
    }

export default Screen