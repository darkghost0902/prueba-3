import React, { useLayoutEffect, useRef, useState } from "react";
import { useCount } from "../../Hooks/useCounter";
import { useFetch } from "../../Hooks/useFetch";
export  const Layout=()=>{
   
    const {contador,aumentar}= useCount(1);
    
    const state = useFetch(`https://www.breakingbadapi.com/api/quotes/${contador}`);
    const {loading, error, data}= state

    const {quote, author, quote_id}= !!data && data[0];
  
    const ptag= useRef();

    const [box, setbox] = useState({})
    useLayoutEffect(()=>{
        setbox(ptag.current.getBoundingClientRect());
        console.log(ptag.current.getBoundingClientRect())
    }, [quote])
    console.log(quote);
    return(

        <>
        <h1>Layout</h1>
        <hr/>
        {
            <>
                <blockquote className="blockquote text-right">
                    <p ref={ptag} className="mb-0">{quote}</p>
                    <br/>
                    <footer className="blockquote-footer">{author} <cite title="Source Title">{quote_id}</cite></footer>
                </blockquote>
                <pre>
                    {JSON.stringify(box,null, 3)}
                </pre>
                </>

        }
        <button className="btn btn-primary" onClick={()=>aumentar(1)} >Siguiente</button>




        </>
    )
}