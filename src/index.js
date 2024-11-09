import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AddTransaction from './components/addTransaction';
import SettingsAndConfigurations from './components/settingsAndConfiguration';
import UseReducerFN from './_ReactHooksConcepts/hooks/useReducer';
import HooksConcept from './_ReactHooksConcepts/hooks/useState_useEffect';
import Auth_context_parent from './_ReactHooksConcepts/hooks/auth_useContext_Parent';
import Main_useContext from './_ReactHooksConcepts/hooks/main_useContext';
import Main_useState from './_ReactHooksConcepts/hooks/main_useState';
import Main_UseEffect from './_ReactHooksConcepts/hooks/main_useEffect';
import UseEffect_Timer from './_ReactHooksConcepts/hooks/main_useEffect_counter';
import Main_UseRef from './_ReactHooksConcepts/hooks/main_useRef';
import ClosureExample from './_ReactHooksConcepts/JS CodeExcercise/ClosureExample';
import Implicit_Explicit from './_ReactHooksConcepts/JS CodeExcercise/Implicit_Explicit';
// import HooksConcept from './_ReactConcepts/hooks';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <AddTransaction /> */}
      {/* <Implicit_Explicit />
      <ClosureExample />
      {<Main_useState />}
      <Main_UseEffect />
      <UseEffect_Timer />
      <UseReducerFN /> */}
    {/* <HooksConcept /> */}
    {/* <Auth_context_parent /> */}
      {/* <Main_UseRef />
      <Main_useContext /> */}
    {/* <SettingsAndConfigurations /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
