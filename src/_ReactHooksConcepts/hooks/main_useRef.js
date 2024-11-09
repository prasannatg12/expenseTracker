
import React, { useEffect, useRef, useState } from 'react'

export default function Main_UseRef(){

    const [ inputValue, setInputValue ] = useState("")
    const count = useRef(0)

    useEffect(()=>{
        count.current = count.current + 1
    })

    return (
        <>
        <center><h5>useRef</h5></center>
        <input type="text" value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}} />

        <div>Render Count: <b>{count.current} </b></div>
        </>
    )
}