import styled from "styled-components";

export const Loading = styled.p`
    color: #fff;
    font-size: 50px;
    display: block;
`;

export const Image = styled.img`
    border-radius: 50%;
    width: 250px;
    height: 250px;
    background-color: #000;
    animation: neon 5s infinite;

    @keyframes neon {
        0%,100%{
            box-shadow: 0px 0px 12px 8px #00008b;
        }
        50%{
            box-shadow: 0px 0px 15px 10px #0000FF;
        }
    }

    @media (max-width: 504px){
        width: 200px;
        height: 200px;
    }
`;

export const NameUser = styled.p`
    color: #0000FF;
    text-shadow: 1px 1px #0000EE;
    font-size: 45px;
    margin-bottom: 60px;
    margin-top: 40px;

    @media (max-width: 504px){
        font-size: 30px;
    }
`;

export const BoxImg = styled.div`
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background-color: #000;
    border: 1px solid #0000FF;
    display: none;

    @media (max-width: 504px){
        width: 200px;
        height: 200px;
    }
`;

export const BoxApiResults = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ItemApiRepo = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const LinkRepo = styled.a`
    text-decoration: none;
    width: 100%;
`;