import { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";


export default function BoasVindas(){
    const [iniciar, setIniciar] = useState(false);
    
    return (
    <ScreenContainer iniciar={iniciar}>
       <ImagemLogo src={logo} alt="logo"/>
       <h1>ZapRecall</h1>
       <BotaoIniciar data-test="start-btn" onClick={()=> setIniciar(true)}>Iniciar Recall!</BotaoIniciar>
    </ScreenContainer>);
}

const ScreenContainer = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: ${props => props.iniciar ? "none" : "flex"};
    position: fixed;
    top:0;
    left:0;
    right:0;
    z-index: 10;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0px;
    padding: 0px;
    h1 {
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #FFFFFF;
    margin-top: 20px;
    margin-bottom: 35px;
    }
`;

const ImagemLogo = styled.img`
width: 136px;
height: 161px;
`

const BotaoIniciar = styled.button`
width: 246px;
height: 54px;
color: #D70900;
background: #FFFFFF;
border: 1px solid #D70900;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
border-radius: 5px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
text-align: center;
margin-bottom: 50px;
&:hover{
    cursor: pointer;
    box-shadow: 0 0.5em 0.5em -0.4em #FFFFFF;
  transform: translateY(-0.25em);
}
`