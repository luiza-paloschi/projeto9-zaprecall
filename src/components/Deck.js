import Pergunta from "./Pergunta"


export default function Deck({cards, terminadas, setTerminadas}){
    
    
    return (<ul>
        {cards.map((pergunta, index)=> <Pergunta key={pergunta.question} pergunta={pergunta} index={index} terminadas={terminadas} setTerminadas={setTerminadas}></Pergunta>)}
    </ul>)
}