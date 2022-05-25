import styled from "styled-components";

export default function Header({image}){
    return (
        <Headers>
            <h1>TrackIt</h1>
            <img src={image} alt='profile' />
        </Headers>
    )
}

const Headers = styled.header`
    box-sizing: border-box;
    width: 100vw;
    height: 70px;
    padding: 0 18px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
        font-size: 38.982px;
        color: #FFFFFF;
    }

    img {
        width: 51px;
        height: 51px;
        border-radius: 98.5px;
        object-fit: cover;
    }
`