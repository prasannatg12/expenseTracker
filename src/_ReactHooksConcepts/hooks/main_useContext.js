import React from 'react';
import Main_useContext_functionalComponent from './main_useContext_functionalComponent';
import ThemeProvider from './main_useContext_ThemeContext';

export default function Main_useContext () {
    return (
        <ThemeProvider>
            <center><h5>useContext</h5></center>
            <Main_useContext_functionalComponent />
        </ThemeProvider>
    )
}