import { render } from '@testing-library/react'
import React, { useContext, useEffect, useReducer, useState } from 'react'
import authContext from './auth_context';
import reducerFN from './reducerFN'

export default function Auth_context_child() {
    
    const statusLoggedIn = useContext(authContext);
    return(
        <div>
            {statusLoggedIn.login ? "You are Logged in": "You are not loggedIn. login again !!!!"}
        </div>
    )
}