import { useState, useContext } from "react";
import styled from "styled-components";
import UserContext from "../../contexts/UserContext";

import Footer from "../../shared/footer/Footer";
import Header from "../../shared/header/Header";

export default function Habits() {

    const [habit, setHabit] = useState({ name: "", days: [] });
    const {user} = useContext(UserContext);
    const week = [
        { id: 0, name: "D" },
        { id: 1, name: "S" },
        { id: 2, name: "T" },
        { id: 3, name: "Q" },
        { id: 4, name: "Q" },
        { id: 5, name: "S" },
        { id: 6, name: "S" },
    ];

    const daysOrdered = habit.days.sort((a, b) => {
        if (a > b) return 1
        if (a < b) return -1
        return 0
    })

    function newHabit(event) {
        console.log(habit)
        console.log(week)
        console.log(habit.days.includes(2))
        event.preventDefault();
    }

    function handleInputChange(e) {
        setHabit({ ...habit, [e.target.name]: e.target.value })
    }

    function changeState(id, element) {
        if (element.id === id) {
            if (habit.days.includes(id)) {
                const array = [];
                for (let i = 0; i < habit.days.length; i++) {
                    if (habit.days[i] !== id) {
                        array.push(habit.days[i])
                    }
                }
                setHabit({ ...habit, days: [...array] })
            } else {
                setHabit({ ...habit, days: [...habit.days, id] })
            }
        }
    }


    return (
        <>
            <Header image={user.image} />
            <Container>
                <Top>
                    <p>Meus hábitos</p>
                    <button>+</button>
                </Top>
                <Form onSubmit={newHabit}>
                    <input type="text" name="name" value={habit.name} onChange={handleInputChange} placeholder="nome do hábito" />
                    <Days>
                        {week.map((value, index) => (
                            <DaysList selected={habit.days.includes(index) ? true : false} onClick={() => changeState(index, value)}>{value.name}</DaysList>
                        ))}
                    </Days>
                    <Buttons>
                        <p>Cancelar</p>
                        <button type="submit" >Salvar</button>
                    </Buttons>
                </Form>
                <Add>
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
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

    button {
        width: 40px;
        height: 35px;
        background-color: #52B6FF;
        border-radius: 4.64px;
        border: none;
        color: #FFFFFF;
        font-size: 26.98px;
    }
`

const Add = styled.div`
    margin-top: 28px;

    p {
        font-size: 17.98px;
        color: #666666;
    }
`

const Form = styled.form`
    box-sizing: border-box;
    width: 100%;
    height: 180px;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin-top: 28px;
    padding: 18px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
        width: 100%;
        height: 45px;
        background-color: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        padding-left: 17px;
        color: #DBDBDB;
        font-size: 19.98px;
    }
`

const Days = styled.div`
    width: 100%;
    margin-top: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const DaysList = styled.div`
    width: 30px;
    height: 30px;
    margin: 4px 4px;
    background-color: ${props => props.selected ? "#CFCFCF" : "#FFFFFF"};
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    color: ${props => props.selected ? "#FFFFFF" : "#DBDBDB"};
    font-size: 19.98px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Buttons = styled.article`
    font-family: 'Lexend Deca',sans-serif;
    position: absolute;
    bottom: 15px;
    right: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
        width: 84px;
        height: 35px;
        border: none;
        border-radius: 4.64px;
        background-color: #52B6FF;
        font-size: 15.98px;
        color: #FFFFFF;
    }

    p {
        font-size: 15.98px;
        color: #52B6FF;
        margin-right: 23px;
    }
`