import styled from 'styled-components'

export const ContainerRepos = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: #000;
`;

export const BoxRepos = styled.div`
    width: 80%;
    min-height: 100vh;
    background-color: #000;
    padding: 1em 0em;
`; 

export const Title = styled.h1`
    color: #0000FF;
    text-shadow: 1px 1px #0000EE;
    font-size: 50px;
    margin-bottom: 1em;

    @media (max-width: 504px){
        font-size: 40px;
    }

    @media (max-width: 407px){
        font-size: 30px;
    }
`;

export const Input = styled.input`
    width: 70%;
    font-size: 20px;
    background-color: #B5B5B5;
    color: #000;
    height: 50px;
    text-align: center;
    border: 2px solid #0000FF;
    border-radius: 10px;
    transition: .5s;


    &:focus{
        outline: none;
        width: 80%;
        background-color: #CFCFCF;
    }
`;

export const BoxApi = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;