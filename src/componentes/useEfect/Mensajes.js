import React, { useEffect } from "react"

export const Mensajes = ()=>{
    
    useEffect(() => {
      console.log("componente montado");
        const coord=()=>{
       
            console.log("d");
      }
      window.addEventListener('mouseover',coord)
    
      return () => {
        console.log("componente desmontado")
        window.removeEventListener('mouseover',coord)
      }
    }, [])
    
    return (
        <div>
            <h1>Eres genial</h1>
        </div>
    )
}