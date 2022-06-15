import { useCallback, useEffect, useState } from "react";
import { ShowIncrementar } from "./ShowIncrementar";




export const Callbacks = ()=>{
    
    const [contador, setcontador] = useState(10);

    const incrementarFather = useCallback(
      (parametro) => {
        setcontador((valor)=>(valor+parametro));
      },
      [],
    )
    //useEffect(()=>(incrementarFather()),[incrementarFather])
    
    // const incrementarFather = ()=> { 
    //     setcontador((value)=>value+1);
    // }
    return (
        <>
            <h1>Usando Callbakcs {contador}</h1>
            <hr/>
            <ShowIncrementar increment={incrementarFather} />
        </>
    )
}