import React from "react";
import { cookies } from "next/headers";
export default function about(){
    const cookieStore = cookies() 
    const theme = cookieStore.get('theme')
    console.log(theme);
    console.log("About server component");
    
    
    return (
        <h1>
            About Page - This is a Next.js application.
        </h1>
    )
}