import styled from "styled-components";
import certo from "../assets/icone_certo.png";
import quaseLembrei from "../assets/icone_quase.png";
import erro from "../assets/icone_erro.png";
import sad from "../assets/sad.png";
import party from "../assets/party.png";

export default function Concluidas({terminadas, cards}){

    return (
    <FooterConcluidas data-test="footer">
        {terminadas.length === cards.length ? (terminadas.filter((pergunta) => pergunta.terminada === "erro").length > 0) ?
        <DivMensagem data-test="finish-text">
        <DivTitulo>
            <img src={sad} alt="sad" />
            <h1>Putz...</h1>
        </DivTitulo>
        <p>Ainda faltam alguns... <br/>
            Mas não desanime!
        </p>
    </DivMensagem>
        :
        <DivMensagem data-test="finish-text">
            <DivTitulo>
                <img src={party} alt="party" />
                <h1>Parabéns!</h1>
            </DivTitulo>
            <p>Você não esquceu de nenhum flashcard!</p>
        </DivMensagem>
        : false}
        {terminadas.length}/{cards.length} CONCLUÍDOS
        <ContainerBotoes>
            {terminadas.map((pergunta, index)=> {
                if(pergunta.terminada === "zap"){
                    return (<img data-test="zap-icon" key={index} src={certo} alt="certo"/>);
                } else if(pergunta.terminada === "quase"){
                    return (<img data-test="partial-icon" key={index} src={quaseLembrei} alt="quase"/>);
                } else {
                    return (<img data-test="no-icon" key={index} src={erro} alt="erro"/>);
                }
            })}
        </ContainerBotoes>
    </FooterConcluidas>);
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
`;

const ContainerBotoes = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    column-gap: 5px;
    margin: 10px;
`;

const DivMensagem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    align-items:center;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    h1{
        font-weight: 700;
        margin-top: 16px;
        margin-bottom: 15px;
        font-size: 18px;
        line-height: 22px;
    }
    p{
        font-weight: 400;
        margin-bottom: 15px;
        text-align: center;
        font-size: 18px;
        line-height: 22px;
    }
`;

const DivTitulo = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    img{
        width: 23px;
        height: 23px;
        margin-right: 12px;
    }
`;