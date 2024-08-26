"use client"

import { useEffect } from "react"



export default function ErrorPage ({error} : {error: Error}) {

    useEffect(()=> {
        console.log(`${error}`)
    }, [error])

    return (
        <div>
            <h1>
                Algo deu muito errado
            </h1>
        </div>
    )
}