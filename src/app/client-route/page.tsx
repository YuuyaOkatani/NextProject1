"use client"

import { serverSideFunction } from "../../../util/server-utils"


export default function ClientRoutePage(){
    const result = serverSideFunction(); 
    console.log("Client route rendered")
    return (
        <div>
            <h1>
                Client Route Page 
            </h1>
            <p>
                {result}
            </p>
        </div>
    )
}