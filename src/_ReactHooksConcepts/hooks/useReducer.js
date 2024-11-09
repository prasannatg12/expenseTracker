import { render } from '@testing-library/react'
import React, { useEffect, useReducer, useState } from 'react'
import reducerFN from './reducerFN'

export default function UseReducerFN() {

    const [ state, dispatch ] = useReducer(reducerFN, {count:0})

    return(
        <div>
            <center><h5>useReducer</h5></center>
            Count: {state.count}

            <br/>

            <button onClick={()=>{dispatch({type:'ADD'})}} >ADD</button>
            <button onClick={()=>{dispatch({type:'SUB'})}} >SUB</button>
            <button onClick={()=>{dispatch({type:'RESET'})}} >RESET</button>

            <br/><br/><br/>
        </div>
    )
}