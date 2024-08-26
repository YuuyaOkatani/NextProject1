"use client"

import { useState } from "react"
import { ClientComponentTwo } from "./client-component-two";

export const ClientComponentOne = ({children} : {children: React.ReactNode}) => {
    const [name, setName] = useState("Presunto com chocolate"); 
    return (
        <div>
            <h1>
                Client component one
            </h1>
            {children}
            
        </div>
    )
}