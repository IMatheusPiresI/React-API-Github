import styled from "styled-components";

export const BoxItem = styled.div`
    width: 100%;
    left: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0px 0px 55px 0px;
    align-items: center;
    border-radius: 130px 130px 0px 0px;
    border: 1px solid #0000FF;
    box-shadow: 1px 0px 15px 10px #00008B;
    padding: 20px 30px;
    transition: .5s;
    gap: 20px;

    &:hover{
        padding: 25px 30px;
        background-color: #0000;
    }
`; 

export const NameRepo = styled.p`
    color: #fff;
    font-size: 24px;

    @media (max-width: 504px){
        font-size: 16px;
    }
`