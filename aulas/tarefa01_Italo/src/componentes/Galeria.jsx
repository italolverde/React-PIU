import { useState } from "react";
import Card from "./Card";

import frisk from "../assets/frisk.jpg"
import gon from "../assets/gon.webp"
import kate from "../assets/kate.jpg"
import luffy from "../assets/luffy.webp"
import orea_seca from "../assets/orea_seca.webp"
import zoro_vascaino from "../assets/zoro_vasco.jpg"

export default function Galeria() {


    return (
        <>
            <div style={{display:"flex",flexDirection:"row", gap:"20px"}}>
                <Card nome={"Frisk"} imagem={frisk} descricao={"Protagonista do jogo undertale"} />
                <Card nome={"Gon"} imagem={gon} descricao={"Protagonista do anime Hunter x Hunter"} />
                <Card nome={"Kate"} imagem={kate} descricao={"Protagonista do anime Shadows House"} />
                <Card nome={"Luffy"} imagem={luffy} descricao={"Protagonista do anime One Piece"} />
                <Card nome={"Orea Seca"} imagem={orea_seca} descricao={"O caba mais desenrrolado do mundo"} />
                <Card nome={"Zoro Vascaino"} imagem={zoro_vascaino} descricao={"Nova escalação para o vasco"} />
            </div>
        </>
    )
}