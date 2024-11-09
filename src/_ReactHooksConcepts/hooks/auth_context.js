import { render } from '@testing-library/react'
import React, { useEffect, useReducer, useState } from 'react'
import reducerFN from './reducerFN'

const authContext = React.createContext({status: null, login : ()=>{}})

export default authContext;