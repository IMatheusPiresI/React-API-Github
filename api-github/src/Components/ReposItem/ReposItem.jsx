import React from "react";
import { BoxItem, NameRepo } from './ReposItemStyle'

function ReposItem({name}){
    return(
            <BoxItem>
                <NameRepo>{name}</NameRepo>
            </BoxItem>
    )
}

export default ReposItem;


