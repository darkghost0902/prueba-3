import React, { useMemo, useState } from "react";
import { useCount } from "../../Hooks/useCounter";


const heavycontador= (interaciones=2) =>{
    for(let i=0; i<= interaciones; i++){
        console.log(interaciones + "ahi vamos.....");
    }
}

export const MemorizeHook = ()=>{
    const { contador, aumentar} = useCount(2);
    const [show, setshow] = useState(false)
    const memovalor =useMemo(()=>heavycontador(contador),[contador]);
    return (
        <>
            <div>
                <h1>
                       <small>{contador}</small>
                </h1>
                <h4>{ memovalor}</h4>
            </div>

            <button className="btn btn-primary" onClick={()=>aumentar(1)} >+</button>
            <button className="btn btn-primary" onClick={()=>setshow(!show)}  >boton</button>

        </>
    )
}