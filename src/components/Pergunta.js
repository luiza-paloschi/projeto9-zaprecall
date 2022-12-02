import { useState } from "react";
import styled from "styled-components"
import play from "../assets/seta_play.png"
import turn from "../assets/seta_virar.png"
import certo from "../assets/icone_certo.png"
import quaseLembrei from "../assets/icone_quase.png"
import erro from "../assets/icone_erro.png"

export default function Pergunta({pergunta, index, terminadas, setTerminadas}){
    const [estado, setEstado] = useState(0)
    const [finished, setFinished] = useState(false)
    const [isZap, setZap] = useState(false)
    const [semi, setSemi] = useState(false)
    const [naoLembrei, setNaoLembrei] = useState(false)

    function mudaEstado(){
        const a = estado + 1;
        setEstado(a);
    }

    function zap(){
        const novoObj = {...pergunta};
        novoObj.terminada = "zap";
        const novoArray = [...terminadas, novoObj];
        
        setTerminadas(novoArray)
        setEstado(0)
        setFinished(true)
        setZap(true)
    }

    function quase(){
        const novoObj = {...pergunta};
        novoObj.terminada = "quase";
        const novoArray = [...terminadas, novoObj];
        
        setTerminadas(novoArray)
        setEstado(0)
        setFinished(true)
        setSemi(true)
    }

    function errou(){
        const novoObj = {...pergunta};
        novoObj.terminada = "erro";
        const novoArray = [...terminadas, novoObj];
        
        setTerminadas(novoArray)
        setEstado(0)
        setFinished(true)
        setNaoLembrei(true)
    }
    
    return (
    <>
    {estado === 0 && 
    <PerguntaFechada color={()=> {
        if (finished === false){
            return "#333333";
        } else if (isZap){
            return "#2FBE34";
        } else if (semi){
            return "#FF922E";
        } else{
            return "#FF3030";
        }
    }} finished={finished}>
        <p>
            {`Pergunta ${index +1}`}
        </p>
        {isZap && <img src={certo} alt="certo"/>}
        {semi && <img src={quaseLembrei} alt="quase"/>}
        {naoLembrei && <img src={erro} alt="erro"/>}
        {!finished &&<img src={play} onClick={mudaEstado} alt="play"/>}
        
    </PerguntaFechada>} 

    {estado === 1 && 
    <PerguntaAberta>
       <p>{pergunta.question}</p>
       <img src={turn} onClick={mudaEstado} alt="turn"/>
    </PerguntaAberta>} 
    
    {estado === 2 && 
    <PerguntaAberta>
       {pergunta.answer}
       <ContainerBotao>
            <Botao onClick={()=> errou()} cor="#FF3030">Não lembrei!</Botao>
            <Botao onClick={()=> quase()} cor="#FF922E">Quase não lembrei!</Botao>
            <Botao onClick={()=> zap()} cor="#2FBE34">Zap!!</Botao>
       </ContainerBotao>
    </PerguntaAberta>} 
    </>
    );
}

const PerguntaFechada = styled.li`
width: 300px;
height: 35px;
background-color: #FFFFFF;
margin: 12px;
padding: 15px;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
display: flex;
align-items: center;
justify-content: space-between;
p {
    font-family: 'Recursive';
    text-decoration: ${props => props.finished ? "line-through" : "none"};
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: ${props => props.color};
  }
`
const PerguntaAberta = styled.li`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & > img{
        position: absolute;
        bottom: 10px;
        right: 10px;
      }
`

const Botao = styled.button`
width: 90px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
color: #FFFFFF;
background: ${props => props.cor};
border-radius: 5px;
border: 1px solid;
padding:5px;
`
const ContainerBotao = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`