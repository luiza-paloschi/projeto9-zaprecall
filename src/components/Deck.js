import { useState } from "react"
import Pergunta from "./Pergunta"


export default function Deck({cards}){
    
    
    return (<ul>
        {cards.map((pergunta, index)=> <Pergunta pergunta={pergunta} index={index}></Pergunta>)}
    </ul>)
}