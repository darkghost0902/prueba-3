import React, { useState } from "react";
import {Multiplehooks} from '../examples/Multiplehooks.js'
export const  RealExample = ()=>{
    const [show, setshow] = useState(false)
    return (
        <>
            <h1>Ejemplo real de Referencia </h1>
            <hr/>
            {show &&  <Multiplehooks />}
            <br/>
            <button className="btn btn-primary mt-4" onClick={()=>(setshow(!show))} >
            show

            </button>
        </>
    )
}