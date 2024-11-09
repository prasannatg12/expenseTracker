

// useEffect used to handle side effect in functional components
// such as fetching data, subscribing to external events, or manually changing the DOM

// useEffect returns either a functional or undefined, 
// React will compare the current value of the constraint, with the value of previous render
// if they are not equal, the effect is called

import React, { useEffect, useState } from 'react'

export default function Main_UseEffect () {

    const [stateValue, setStateValue] = useState(1);
    const [operateValue, setOperateValue] = useState(0);
    const [multipliedValue, setMultipliedValue] = useState(1)

    useEffect(()=>{
        setMultipliedValue(stateValue * operateValue)
    },[stateValue])

    return (
        <div>
            <center><h5>useEffect</h5></center>
            <input type="text" onChange={(e)=>{setOperateValue((e.target.value))}} value={operateValue} />
            <button onClick={()=>{setStateValue(parseInt(operateValue) + parseInt(stateValue))}} >ADD</button>
            <br/> Added Value to given input:  {stateValue}
            <br/> Multiplied Value: {multipliedValue}
        </div>
    )
}