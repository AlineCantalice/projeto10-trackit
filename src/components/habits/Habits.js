import styled from "styled-components";

import Footer from "../../shared/footer/Footer";
import Header from "../../shared/header/Header";

export default function Habits() {
    return (
        <>
            <Header />
            <Container>
                <h1>Eus sou habitos</h1>
            </Container>
            <Footer />
        </>
    )
}

const Container = styled.section`
    width: 100vw;
    height: 80vh;
    position: relative;
    top: 70px;
    left: 0;
    background-color: #F2F2F2;
`