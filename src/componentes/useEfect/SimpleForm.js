import React, { useEffect, useState } from "react";
import './efect.css';
import { Mensajes } from "./Mensajes.js";
export const SimpleForm = ()=>{



    const [form, setform] = useState(
        {
            name:'',
            email:''
        }
    );
   const {name, email}= form

    useEffect( ()=>{
        console.log("funciona");
    },[])
    useEffect( ()=>{
        console.log("form funciona");
    },[form])
    useEffect( ()=>{
        console.log("email funciona");
    },[email])
    const handleInput=({target})=>{
        
       // console.log(target.value, target.name)
       setform({
         ...form,
         [target.name]: target.value
    
       })
    }
    console.log(name)
    return (
        <>
            <h1>
                Effect
            </h1>
            <hr/>
            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu Nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInput}
                   
                />
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="correo ejemplo@ejemplo.com"
                    autoComplete="off"
                    value={email}
                    onChange={handleInput}
                   
                />
            </div>
        
            {(name==='123') && < Mensajes/>}
        </>
    )
}