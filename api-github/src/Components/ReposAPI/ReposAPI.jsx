import React from "react";
import ReposItem from "../ReposItem/ReposItem";
import { BoxApiResults, Loading, BoxImg, Image, NameUser, ItemApiRepo, LinkRepo } from "./ReposItemStyle";

function ReposAPI({repositorios, foto, login, carregando}){
    return(
        <BoxApiResults>
            <Loading id="loading">{carregando}</Loading>
            <BoxImg id='foto'>
                <Image src={foto} alt="Foto Perfil" />
            </BoxImg>
            <NameUser id='login'>{login}</NameUser>   
            <ItemApiRepo>
            {repositorios.map(item =>(
                    <LinkRepo href={item.html_url} key={item.id} target = '_blank' rel="noreferrer">
                        <ReposItem 
                            href = {item.html_url}
                            name = {item.name}
                    />
                    </LinkRepo>
                ))}
            </ItemApiRepo>
        </BoxApiResults>
    )
}

export default ReposAPI;