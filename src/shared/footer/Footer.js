import styled from "styled-components";
import { TailSpin } from "react-loader-spinner";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from "react-router-dom";

export default function Footer() {

    const navigate = useNavigate();

    return (
        <Footers>
            <p onClick={() => navigate("/habitos")}>Hábitos</p>
            <ProgressBar>
                <CircularProgressbar
                    text={`Hoje`}
                    styles={buildStyles({
                        // Rotation of path and trail, in number of turns (0-1)
                        rotation: 0.25,
                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        strokeLinecap: 'butt',
                        // Text size
                        textSize: '17.98px',
                        // How long animation takes to go from one percentage to another, in seconds
                        pathTransitionDuration: 0.5,
                        // Can specify path transition in more detail, or remove it entirely
                        // pathTransition: 'none',
                        // Colors
                        pathColor: `#52B6FF`,
                        textColor: '#FFFFFF',
                        trailColor: '#52B6FF',
                        backgroundColor: '#52B6FF',
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