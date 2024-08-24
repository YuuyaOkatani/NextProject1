"use client"

import { useRouter } from "next/navigation"



export default function OrderProduct(){
    const router = useRouter();
    const handleClick = () => {
        console.log("Placing yout order ");
        router.push("/")
        
    }; 
    return (
        <>
        <h1>order Product</h1>
        <button onClick={handleClick}>Place order</button>
        </>
    )
}