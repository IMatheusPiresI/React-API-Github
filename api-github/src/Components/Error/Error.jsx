import React from "react";
import { ContainerError, CardError, ErroImg, ErrorMessage } from './ErrorStyle'
import Erro from '../../Images/Erro.png'

function Error(){
    return(
        <ContainerError>
            <CardError>
                <ErroImg src={Erro} alt="" />
                <ErrorMessage>Usuário não encontrado</ErrorMessage>
            </CardError>
        </ContainerError>
    )   
}

export default Error;