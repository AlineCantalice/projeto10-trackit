import { useContext } from "react";
import styled from "styled-components";
import UserContext from "../../contexts/UserContext";

import Footer from "../../shared/footer/Footer";
import Header from "../../shared/header/Header";

export default function FollowUp(){

    const {user} = useContext(UserContext);

    return (
        <>
            <Header image={user.image} />
            <Container>
                <Top>
                    <p>Histórico</p>
                </Top>
                <Add>
                    <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
                </Add>
            </Container>
            <Footer />
        </>
    )
}

const Container = styled.section`
    width: 100vw;
    height: 80vh;
    box-sizing: border-box;
    position: relative;
    top: 70px;
    left: 0;
    padding: 28px 17px;
    background-color: #F2F2F2;
`
const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        font-size: 22.98px;
        color: #126BA5;
    }
`

const Add = styled.div`
    margin-top: 28px;

    p {
        font-size: 17.98px;
        color: #666666;
    }
`