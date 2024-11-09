import { render } from '@testing-library/react'
import React, { useEffect, useReducer, useState } from 'react'
import authContext from './auth_context';
import Auth_context_child from './auth_useContext_Child';
import reducerFN from './reducerFN'

export default function Auth_context_parent() {

    const [ authStatus, setAuthStatus ] = useState(false);

    const login = () => {
        setAuthStatus(false)
    }

    return(
        <React.Fragment>
            <authContext.Provider 
                value={{ status: authStatus, login: login }}>
                    <Auth_context_child />
            </authContext.Provider>
        </React.Fragment>
    )
}