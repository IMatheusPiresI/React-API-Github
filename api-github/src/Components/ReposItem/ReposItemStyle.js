import styled from "styled-components";

export const BoxItem = styled.div`
    width: 100%;
    left: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0px 0px 55px 0px;
    align-items: center;
    border-radius: 0px 120px 0px 120px;
    border: 1px solid #0000FF;
    box-shadow: 1px 0px 15px 10px #00008B;
    padding: 20px 30px;
    transition: .5s;
    gap: 20px;

    &:hover{
        border-radius: 120px 0px 120px 0px;
        background-color: #0000;
        animation: shadowItem 2s infinite; 
    }


    @keyframes shadowItem{
        0%,100%{
            box-shadow: 1px 0px 15px 10px #00008B;
        }
        50%{
            box-shadow: 0px 0px 25px 12px #00008B;
        }
    }
`; 

export const NameRepo = styled.p`
    color: #E8E8E8;
    font-size: 24px;

    @media (max-width: 504px){
        font-size: 16px;
    }
`