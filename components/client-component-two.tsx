"use client"

import { useState } from "react"

export const ClientComponentTwo = () => {
    const [name, setName] = useState("Banana com mostarda"); 
    return (
        <div>
            <h1>
                Client component two
            </h1>
        </div>
    )
}