import React, { useCallback } from 'react'
import { Hijo } from './Hijo'
import { useState } from 'react';


export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

   // const incrementar = ( num ) => {
       // setValor((valo) => valo+num)
    //}
    
    const incrementar = useCallback((num)=>{ 
          setValor( (e)=>(e+num))}
        ,[])
    return (
        <div>
            <h2>{}</h2>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
