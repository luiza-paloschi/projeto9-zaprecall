import styled from "styled-components";


export default function Concluidas({terminadas, cards}){
    return (
    <FooterConcluidas data-test="footer">
        {terminadas.length}/{cards.length} CONCLUÍDOS
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