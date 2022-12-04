import { useState } from "react";
import styled from "styled-components";
import play from "../assets/seta_play.png";
import turn from "../assets/seta_virar.png";
import certo from "../assets/icone_certo.png";
import quaseLembrei from "../assets/icone_quase.png";
import erro from "../assets/icone_erro.png";

export default function Pergunta({pergunta, index, terminadas, setTerminadas}){
    const [estado, setEstado] = useState(0);
    const [finished, setFinished] = useState(false);
    const [isZap, setZap] = useState(false);
    const [semi, setSemi] = useState(false);
    const [naoLembrei, setNaoLembrei] = useState(false);

    function mudaEstado(){
        const a = estado + 1;
        setEstado(a);
    }

    function fecharCard(resultado){
        const novoObj = {...pergunta};
        novoObj.terminada = resultado;
        const novoArray = [...terminadas, novoObj];
        
        setTerminadas(novoArray);
        setEstado(0);
        setFinished(true);
        if (resultado ==="zap"){
            setZap(true);
        }
        if (resultado ==="quase"){
            setSemi(true);
        }
        if (resultado ==="erro"){
            setNaoLembrei(true);
        }
    }

    return (
    <>
    {estado === 0 && 
    <PerguntaFechada data-test="flashcard" color={()=> {
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
        <p data-test="flashcard-text">
            {`Pergunta ${index +1}`}
        </p>
        {isZap && <img data-test="zap-icon" src={certo} alt="certo"/>}
        {semi && <img data-test="partial-icon" src={quaseLembrei} alt="quase"/>}
        {naoLembrei && <img data-test="no-icon" src={erro} alt="erro"/>}
        {!finished &&<img src={play} onClick={mudaEstado} data-test="play-btn" alt="play"/>}
        
    </PerguntaFechada>} 

    {estado === 1 && 
    <PerguntaAberta data-test="flashcard">
       <p data-test="flashcard-text">{pergunta.question}</p>
       <img data-test="turn-btn" src={turn} onClick={mudaEstado} alt="turn"/>
    </PerguntaAberta>} 
    
    {estado === 2 && 
    <PerguntaAberta data-test="flashcard">
       <p data-test="flashcard-text">{pergunta.answer}</p>
       <ContainerBotao>
            <Botao data-test="no-btn" onClick={()=> fecharCard("erro")} cor="#FF3030">Não lembrei!</Botao>
            <Botao  data-test="partial-btn" onClick={()=> fecharCard("quase")} cor="#FF922E">Quase não lembrei!</Botao>
            <Botao  data-test="zap-btn" onClick={()=> fecharCard("zap")} cor="#2FBE34">Zap!!</Botao>
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
img {
    cursor: ${props => props.finished? "default" : "pointer"};
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
        cursor: pointer;
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
cursor: pointer;
`
const ContainerBotao = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`