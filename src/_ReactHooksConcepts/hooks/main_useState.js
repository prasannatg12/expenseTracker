import React, { useState } from 'react';

export default function Main_useState() {

    const [stateValue, setStateValue] = useState("I'm Initialised. Click me to change text")
    const [initialValue, setInitialValue] = useState(true);

    return (
        <>
            <center><h5>useState</h5></center>
            <div onClick={() => {
                setStateValue(initialValue ? "I'm Initialised. Click me to change text" : "I'm Clicked. Click again to initialize")
                setInitialValue(prevValue => !prevValue)
            }} >
                {stateValue}
            </div>
        </>
    )
}