import React, { useState } from "react";
import { useCount } from "../../Hooks/useCounter";
import { Small } from "./Small";

export const Memorize = ()=>{

    const { contador, aumentar} = useCount(10);
    const [show, setshow] = useState(false)
    return (
        <>
            <div>
                <h1>
                        Counter: < Small valor={contador} />
                </h1>
            </div>

            <button className="btn btn-primary" onClick={()=>aumentar(1)} >+</button>
            <button className="btn btn-primary" onClick={()=>setshow(!show)}  >boton</button>

          
        
        
        </>
    )
}