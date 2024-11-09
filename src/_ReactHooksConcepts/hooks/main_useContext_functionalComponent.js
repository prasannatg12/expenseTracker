import React, { useContext } from 'react';
import { useTheme, useThemeUpdate } from './main_useContext_ThemeContext';
import ThemeStatus from './main_useContext_ThemeStatus';


export default function Main_useContext_functionalComponent() {

    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()

    const layoutStyle = () => {
        return {
            backgroundColor:darkTheme ? "black" :"white",
            color:darkTheme ? "white" :"black",
            
        }
    }

    return (
        <div>
            <button onClick={toggleTheme} >Toggle Theme</button>
            <br />
            <div style={layoutStyle()}>
                THEME CHANGE
            </div>
            <ThemeStatus />
        </div>
    )
}