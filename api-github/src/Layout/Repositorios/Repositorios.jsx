import React from "react";
import ReposItem from "../../Components/ReposContainer/ReposContainer";
import { ContainerRepos, Title, Input, BoxRepos, BoxApi } from "./RepositoriosStyle";

function Repositorios(){
    return(
        <ContainerRepos>
            <BoxRepos>
            <Title>Meus Repositórios</Title>
                <BoxApi>
                    <Input type="text" name="" id="user" placeholder='Digite o nome de usuário' required/>
                    <ReposItem />
                </BoxApi>
            </BoxRepos>    
        </ContainerRepos>
    )
}

export default Repositorios;