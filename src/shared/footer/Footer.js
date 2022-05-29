import styled from "styled-components";
import { TailSpin } from "react-loader-spinner";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import PercentageContext from "../../contexts/PercentageContext";

export default function Footer() {

    const navigate = useNavigate();
    const { percentage } = useContext(PercentageContext);

    return (
        <Footers>
            <p onClick={() => navigate("/habitos")}>Hábitos</p>
            <ProgressBar onClick={() => navigate("/hoje")}>
                <CircularProgressbar
                    value={percentage*100}
                    text={'Hoje'}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                      backgroundColor: "#52B6FF",
                      textColor: "#FFFFFF",
                      pathColor: "#FFFFFF",
                      trailColor: "transparent"
                    })}
                />
            </ProgressBar>
            <p onClick={() => navigate("/historico")}>Histórico</p>
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
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        font-size: 17.976px;
        color: #52B6FF;
    }
`

const ProgressBar = styled.div`
    width: 91px;
    height: 91px;
    background-color: #52B6FF;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
    bottom: 16px;
`