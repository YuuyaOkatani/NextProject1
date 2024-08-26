"use client"


import { createContext, useContext } from "react";


type Theme = {
    colors: {
        primary: string;
        secondary: string;
    }
}

const defaultTheme: Theme = {
    colors: {
        primary: "#0070f3",
        secondary: "#f8312f",
    }
}

const ThemeContext = createContext<Theme>(defaultTheme);




export default function ThemeProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeContext.Provider value={defaultTheme}>
            {children}

        </ThemeContext.Provider>
    );
}


export const useTheme = () => useContext(ThemeContext)