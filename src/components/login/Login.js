import styled from "styled-components";
import logo from "../../assets/images/logo.png"

export default function Login() {
    return (
        <Container>
            <Image src={logo} alt="logo" />
            <Form>
                <input type="email" placeholder="email" />
                <input type="password" placeholder="senha" />
                <button type="submit">Entrar</button>
            </Form>
        </Container>
    )
}

const Container = styled.section`
    width: 90vw;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Image = styled.img`
    width: 180px;
    height: 178.38px;
    margin-bottom: 33px;
`

const Form = styled.form`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;

    input {
        width: 100%;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        font-size: 20px;
        font-weight: 400;
        color: #DBDBDB;
        padding-left: 11px;
        margin-bottom: 6px;
    }

    button {
        width: 100%;
        height: 45px;
        background: #52B6FF;
        border: none;
        border-radius: 4.64px;
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 21px;
        text-align: center;
        color: #FFFFFF;
    }
`