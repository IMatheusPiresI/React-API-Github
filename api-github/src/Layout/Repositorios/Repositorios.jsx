import React from "react";
import ReposContainer from "../../Components/ReposContainer/ReposContainer";
import { ContainerRepos, Title, Input, BoxRepos, BoxApi } from "./RepositoriosStyle";

function Repositorios(){
    return(
        <ContainerRepos>
            <BoxRepos>
                <Title>&lt; Repositórios &gt;</Title>
                    <BoxApi>
                        <Input type="text" name="" id="user" placeholder='Digite o nome de usuário' required autoComplete="off" spellCheck='false'/>
                        <ReposContainer />
                    </BoxApi>
            </BoxRepos>    
        </ContainerRepos>
    )
}

export default Repositorios;