"use client"


import { useState } from "react";
import { Navlinks } from "./nav-links";
import { NavSearch } from "./nav-search";

export const 

Navbar = () => {
    console.log(`Navbar rendered`);

    const [search, setSearch] = useState(""); 

    return (
        <div className="navbar">
            <Navlinks />
            <NavSearch  />
        </div>
    );
    
}