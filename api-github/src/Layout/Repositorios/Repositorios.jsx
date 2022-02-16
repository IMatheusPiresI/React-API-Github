import React from "react";
import { ContainerRepos, Title, Input, Loading, BoxRepos } from "./RepositoriosStyle";

function Repositorios({repositorios, foto, login, loading}){
    return(
        <ContainerRepos>
            <BoxRepos>
            <Title>Meus Repositórios</Title>
                <div>
                    <Input type="text" name="" id="user" placeholder='Digite o nome de usuário' required/>
                    <Loading id="loading">{loading}</Loading>
                    <ol>
                        {repositorios.map(item =>(
                            <a key={item.id} href={item.html_url} target = '_blank' style={{
                                textDecoration: 'none',
                            }}>
                                <li style={{
                                color: "white",
                            }}>{item.name}</li>
                            </a>
                        ))}
                    </ol>
                    <img src={foto} alt="" />
                    <p id='login'>{login}</p>
                </div>
            </BoxRepos>    
        </ContainerRepos>
    )
}

export default Repositorios;