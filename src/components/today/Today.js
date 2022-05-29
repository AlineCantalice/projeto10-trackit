import axios from "axios"
import "dayjs/locale/pt-br"
import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { CheckBox } from '@styled-icons/material'

import UserContext from "../../contexts/UserContext"
import Footer from "../../shared/footer/Footer"
import Header from "../../shared/header/Header"
import FinishedContext from "../../contexts/FinishedContext"
import PercentageContext from "../../contexts/PercentageContext"

export default function Today() {

    const URL_GET = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
    const [today, setToday] = useState([]);
    const { user } = useContext(UserContext);
    const { finished, setFinished } = useContext(FinishedContext);
    const { percentage, setPercentage } = useContext(PercentageContext);
    const config = {
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    };
    const dayjs = require('dayjs')
    const now = dayjs();
    const weekdays = [
        "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"
    ]

    useEffect(() => {
        const promise = axios.get(URL_GET, config);
        promise.then(response => {
            setToday(response.data);
            const arr = [];
            for (let i = 0; i < response.data.length; i++) {
                if (response.data[i].done) {
                    arr.push(response.data[i].id);
                }
            }
            setFinished(arr);
            if (arr.length !== 0) {
                updatePercentage(arr.length, today.length);
            }
        });
    }, []);

    function listToday() {
        const promise = axios.get(URL_GET, config);
        promise.then(response => {
            setToday(response.data);
            const arr = [];
            for (let i = 0; i < response.data.length; i++) {
                if (response.data[i].done) {
                    arr.push(response.data[i].id);
                }
            }
            setFinished(arr);
            updatePercentage(arr.length, today.length);
        });
    }

    function habitDone(element, index) {
        if (element.id === index) {
            if (finished.includes(element.id)) {
                habitUndone(element, index);
            } else {
                const URL_DONE = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${index}/check`;
                const promise = axios.post(URL_DONE, element, config);
                promise.then(() => {
                    if (finished.length === 0) {
                        setFinished(element.id);
                    } else {
                        setFinished([...finished, element.id]);
                    }
                    listToday();
                    updatePercentage(finished.length, today.length);
                })
            }
        }
    }

    function habitUndone(element, index) {
        if (element.id === index) {
            const URL_UNDONE = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${index}/uncheck`;
            const promise = axios.post(URL_UNDONE, element, config);
            promise.then(() => {
                const arr = [];
                for (let i = 0; i < finished.length; i++) {
                    if (finished[i] !== element.id) {
                        arr.push(finished[i]);
                    }
                }
                setFinished(arr);
                listToday();
                updatePercentage(arr.length, today.length);
            });
        }
    }

    function updatePercentage(done, all) {
        setPercentage(done / all);
    }

    return (
        <>
            <Header image={user.image} />
            <Container>
                <Top>
                    <p>{weekdays[dayjs().day(today.id)]}, {now.format('DD/MM')}</p>
                </Top>
                {!finished ? '' : percentage === 0 ? <Text>Nenhum hábito concluído ainda</Text> : <Text color={true}>{Math.floor(percentage * 100)}% dos hábitos concluídos</Text>}
                {!today ? 'Carregando...' :
                    <List>
                        {today.map((value, index) => (
                            <li onClick={() => habitDone(value, value.id)}>
                                <div>
                                    <p>{value.name}</p>
                                    <h6>Sequência atual: {value.currentSequence}</h6>
                                    <h6>Seu recorde: {value.highestSequence}</h6>
                                </div>
                                <Check finished={value.done}></Check>
                            </li>
                        ))}
                    </List>
                }
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
    overflow-y: scroll;
`

const Top = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    p {
        font-size: 22.98px;
        color: #126BA5;
        margin-bottom: 5px;
    }
`

const Text = styled.h6`
    font-size: 17.98px;
    color: ${props => props.color ? "#8FC549" : "#BABABA"};
`

const List = styled.ul`
    margin-top: 20px;

    li {
        padding: 15px;
        width: 100%;
        height: 91px;
        background-color: #FFFFFF;
        border-radius: 5px;
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;

        p{
            font-size: 19.98px;
            color: #666666;
            margin-bottom: 8px;
        }

        h6{
            font-size: 12.98px;
            color: #666666;
        }
    }
`

const Check = styled(CheckBox)`
    width: 69px;
    height: 69px;
    color: ${props => props.finished ? '#8FC549' : '#EBEBEB'};
`