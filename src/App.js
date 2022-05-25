import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

import Login from "./components/login/Login";
import SignUp from "./components/sign-up/SignUp";
import Habits from "./components/habits/Habits";
import Today from "./components/today/Today";
import FollowUp from "./components/follow-up/FollowUp";
import UserContext from "./contexts/UserContext";

export default function App() {
    
    const [user, setUser] = useState(null);

    return (
        <Main>
            <UserContext.Provider value={{user, setUser}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/cadastro" element={<SignUp />} />
                    <Route path="/habitos" element={<Habits />} />
                    <Route path="/hoje" element={<Today />} />
                    <Route path="/historico" element={<FollowUp />} />
                </Routes>
            </BrowserRouter>
            </UserContext.Provider>
        </Main>
    )
}

const Main = styled.main`
    width: 100vw;
    height: 100vh;
    background-color: #FFFFFF;
    font-family: 'Lexend Deca', sans-serif;
    box-sizing: border-box;
    display: flex;
    justify-content: center;

    h1 {
        font-family: 'Playball', cursive;
    }

    p {
        font-family: 'Lexend Deca', sans-serif;
    }
`