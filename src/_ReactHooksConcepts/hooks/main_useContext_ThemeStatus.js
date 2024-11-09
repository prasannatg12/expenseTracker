
import React from 'react';
import { useTheme } from './main_useContext_ThemeContext';

export default function ThemeStatus(){

    const darkTheme = useTheme()

    return(
        <div>
             DarkTheme Status: {darkTheme.toString()}
        </div>
    )

}