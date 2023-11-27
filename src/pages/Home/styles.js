import styled from 'styled-components'

export const BodyContainer = styled.div`
    position: relative;
    width: 600px;
    height: 400px;
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
    opacity: 0.1;
`;

export const ContainerText = styled.div`
    position: absolute;
    top:0;
    left:0;
    width: 90%;
    height: 80%;
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    margin-top: 40px;
    color: #39FF14;

    h1 {
        font-family: 'Open Sans';
        margin-bottom: 19px;
        font-weight: bold;
        text-transform: uppercase;
    }
`

export const Input = styled.input`
    width: 80%;
    height: 50px;
    margin-top: 30px;
    border-radius: 30px;
    outline: none;
    padding-left: 40px;
    font-size: 19px;
    background-color: #444;
    border: none;
    color: #fff;
`

export const Button = styled.button`
    margin-top: 25px;
    width: 30%;
    height: 50px;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    background-color: #444;
    color: #39FF14;
    font-weight: bold;

    &:hover {
        color: #000;
        background-color: #39FF14;
        transition: 0.6s;
    }
`