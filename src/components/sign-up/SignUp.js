import logo from "../../assets/images/logo.png"
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function SignUp() {

    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState(
        {
            email: '',
            password: '',
            name: '',
            image: ''
        }
    );

    function handleInputChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function signUp(event){
        event.preventDefault();
        setLoading(true);
        const promise = axios.post(URL, formData);
        promise.then(() => {
            navigate("/");
        }).catch(() => {
            alert("E-mail já cadastrado!! Tente novamente.");
            setFormData({
                email: '',
                password: '',
                name: '',
                image: ''
            });
            setLoading(false);
        })
    }

    return (
        <Container>
            <Image src={logo} alt="logo" />
            <Form onSubmit={signUp}>
                <input disabled={loading} type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="email" required />
                <input disabled={loading} type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="senha" required />
                <input disabled={loading} type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="nome" required />
                <input disabled={loading} type="text" name="image" value={formData.image} onChange={handleInputChange} placeholder="foto" required />
                <Button disabled={loading} type="submit">{loading ? <ThreeDots color="#FFFFFF"/> : 'Cadastrar'}</Button>
            </Form>
            <p disabled={loading} onClick={() => navigate("/")}>Já tem uma conta? Faça login!</p>
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

    p {
        font-size: 13.976px;
        margin-top: 25px;
        text-decoration-line: underline;
        color: #52B6FF;
    }
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
`

const Button = styled.button`
    width: 100%;
    height: 45px;
    background: #52B6FF;
    border: none;
    border-radius: 4.64px;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 21px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    opacity: ${props => props.disabled ? 0.7 : 1}; 
`