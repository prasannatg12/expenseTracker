
import React, { useEffect, useState } from 'react'

export default function UseEffect_Timer(){

    const [count, setCount] = useState(0)
    const [countEmptyDep, setCountEmptyDep ] = useState(0)
    const [countDep, setCountDep] = useState(0)
    const [switchTimer, setSwithcTimer] = useState(false)

    // No dependency passed: calls every time
    useEffect(()=>{
        let timer= setTimeout(() => {
            setCount((count)=> count+1)
        }, 1000);
        // console.log("im calling here")
        return ()=> clearTimeout(timer)
    })

    // Empty Dependency passed: called once, after render
    useEffect(()=>{
        let timer= setTimeout(() => {
            setCountEmptyDep((count)=> count+1)
        }, 1000); 
        // console.log("im calling here")
        return ()=> clearTimeout(timer)
    }, [])

    // Props or Variables passed: called when change in props or variable
    useEffect(()=>{
        let timer= setTimeout(() => {
            setSwithcTimer((count)=> count+1)
        }, 1000);
        // console.log("im calling here")
        return ()=> clearTimeout(timer)
    }, [switchTimer])

    return(
        <>
        <br />
        <div>Timer (Called Everytime): {count}</div>
        <div>Timer (Called Once): {countEmptyDep}</div>
        <div>Timer (Called when change in variable or props): {countDep}</div>
        <input type="button" onClick={()=>{ setSwithcTimer(!switchTimer)}} value="Start Manual Trigger" />
        </>
    )
}