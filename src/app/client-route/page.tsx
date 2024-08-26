"use client"

import { useTheme } from "../../../components/theme-provider";
import { clientSideFunction } from "../../../util/client-utils";
import { serverSideFunction } from "../../../util/server-utils"


export default function ClientRoutePage(){
    //const result = serverSideFunction(); 
    const theme = useTheme() 
    const result = clientSideFunction(); 
    console.log("Client route rendered")
    return (
        <div>
            <h1 style={{color: theme.colors.primary}}>
                Client Route Page 
            </h1>
            <p>
                {result}
            </p>
        </div>
    )
}