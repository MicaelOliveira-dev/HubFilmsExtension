import styled from 'styled-components';

export const HoverCard = styled.div`
    position: absolute;
    margin-top: 20px;
    z-index: 1;
    background-color: #090909;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    opacity: 0;
    transition: opacity 0.3s ease;
    top: 20px;
`;

export const CardContainer = styled.div`
    position: relative;
`;

export const Container = styled.div`
    .slick-slide {
        width: 100%;
        height: 550px; 
  }
`;

export const Card = styled.div`
    margin-left: 20px;
    margin-right: 30px;
    img {
        width: 200px;
        height: 300px;
        cursor: pointer;
        position: relative;
    }

    &:hover {
        ${HoverCard} {
            opacity: 1;
            transition:0.5s;
        }
    }
`;

export const HoverImage = styled.img`
    width: 100%;
    height: 70%;
    border-radius: 15px;
`;

export const HoverTitle = styled.h2`
    color: #39FF14;
    margin-top: 10px;
    font-weight: bold;
    font-family: 'Roboto';
`;

export const Title = styled.h1`
    font-size: 20px;
    color: #39FF14;
    margin-top: 40px;
    margin-bottom: 30px;
    font-weight: bold;
    font-family: 'Roboto';
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const DetailsButton = styled.button`
    margin-top: 15px;
    padding: 10px;
    background-color: #39FF14;
    color: #090909;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    font-family: 'Roboto';
`;