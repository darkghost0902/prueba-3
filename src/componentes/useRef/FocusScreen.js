import React, { useRef } from "react"

export const FocusScreem = ()=>{

    const inputRef = useRef();
    console.log(inputRef);

    const handlescreen= ()=>{
        inputRef.current.select();
        console.log(inputRef);
        //document.querySelector('input').select();
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr/>

            <input
             ref={inputRef}
             className="form-control"
             placeholder="Su nombre"
            />
            <button className="btn btn-primary mt-4" onClick={handlescreen} >Focus</button>
        </div>
    )
}