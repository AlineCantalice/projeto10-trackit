import styled from "styled-components";
import { TailSpin } from "react-loader-spinner";

export default function Footer() {
    return (
        <Footers>
            <p>Hábitos</p>
            <TailSpin color="#FFFFFF"/>
            <p>Histórico</p>
        </Footers>
    )
}

const Footers = styled.footer`
    box-sizing: border-box;
    width: 100vw;
    height: 70px;
    padding: 0 31px;
    background-color: #FFFFFF;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        font-size: 17.976px;
        color: #52B6FF;
    }

    div {
        width: 91px;
        height: 91px;
        background-color: #52B6FF;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        bottom: 16px;
        color: #FFFFFF;
    }
`