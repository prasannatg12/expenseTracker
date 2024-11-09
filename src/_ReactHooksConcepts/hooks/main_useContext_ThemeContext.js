import React, { useContext, useState } from 'react';

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export function useTheme(){
    console.log("under useThmeme", ThemeContext, ThemeUpdateContext)
    return useContext(ThemeContext)
}

export function useThemeUpdate(){
    console.log("under theme useThmemeUpdate", ThemeContext, ThemeUpdateContext)
    return useContext(ThemeUpdateContext)
}

export default function ThemeProvider({children}) { 

    const [darkTheme, setDarkTheme] = useState(true);

    function toggleTheme() {
        console.log("Toggle Theme");
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }

    return (
        <ThemeContext.Provider value = {darkTheme} >
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}