import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { MainApp } from './componentes/useContext/MainApp';
//import { CounterApp } from './componentes/useState/CounterApp';
//import Hooks from './Hooks';
//import { AppTodo } from './componentes/useReduce/AppTodo';
// import { CounterCustom } from './componentes/useState/CounterCustom';
// import { SimpleForm } from './componentes/useEfect/SimpleForm';
//import { FormCustom } from './componentes/useEfect/FormCustom';
//import { Multiplehooks } from './componentes/examples/Multiplehooks';
//import { FocusScreem } from './componentes/useRef/FocusScreen';
//import { RealExample } from './componentes/useRef/RealExample.js';
//import { Layout } from './componentes/useLayout/Layout';
//import { Memorize } from './componentes/useMemo/Memorize.js';
//import { MemorizeHook } from './componentes/useMemo/MemorizeHook';
//import { Callbacks } from './componentes/useMemo/Callbaks';
//import { Padre } from './componentes/07-tarea-memo/Padre';
//import './componentes/useReduce/IntroReduce.js';

const root = createRoot(document.getElementById('root'));
root.render( 
    <BrowserRouter>
        <MainApp />
    </BrowserRouter>

);
