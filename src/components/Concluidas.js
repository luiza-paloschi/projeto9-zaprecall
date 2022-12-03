import styled from "styled-components";
import certo from "../assets/icone_certo.png";
import quaseLembrei from "../assets/icone_quase.png";
import erro from "../assets/icone_erro.png";

export default function Concluidas({terminadas, cards}){
    return (
    <FooterConcluidas data-test="footer">
        {terminadas.length}/{cards.length} CONCLUÍDOS
        <ContainerBotoes>
            {terminadas.map((pergunta, index)=> {
                if(pergunta.terminada === "zap"){
                    return <img data-test="zap-icon" key={index} src={certo} alt="certo"/>
                } else if(pergunta.terminada === "quase"){
                    return <img data-test="partial-icon" key={index} src={quaseLembrei} alt="quase"/>
                } else {
                    return <img data-test="no-icon" key={index} src={erro} alt="erro"/>
                }
            })}
        </ContainerBotoes> 
    </FooterConcluidas>) 
}

const FooterConcluidas = styled.div`
width: 100%;
min-height: 50px;
background-color: #FFFFFF;
position: fixed;
bottom: 0;
z-index: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-family: 'Recursive';
font-weight: 400;
font-size: 18px;
color: #333333;
padding: 10px;
`

const ContainerBotoes = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    column-gap: 5px;
    margin: 10px;
    margin-bottom: 0px;
`