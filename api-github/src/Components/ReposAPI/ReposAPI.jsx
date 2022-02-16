import React from "react";
import { BoxApiResults, Loading, BoxImg, Image, NameUser } from "./ReposItemStyle";

function ReposAPI({repositorios, foto, login, carregando}){
    return(
        <BoxApiResults>
            <Loading id="loading">{carregando}</Loading>
            <BoxImg id='foto'>
                <Image src={foto} alt="Foto Perfil" />
            </BoxImg>
            <NameUser id='login'>{login}</NameUser>   
            <ol>
            {repositorios.map(item =>(
                    <a key={item.id} href={item.html_url} target = '_blank' rel="noreferrer">
                        <li style={{
                        color: "white",
                    }}>{item.name}</li>
                    </a>
                ))}
            </ol>
        </BoxApiResults>
    )
}

export default ReposAPI;