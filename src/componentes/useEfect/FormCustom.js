import React, { useEffect, useState } from "react";
import { useForm } from "../../Hooks/useForm";
import './efect.css';
import { Mensajes } from "./Mensajes.js";

export const FormCustom = ()=>{

    const [values, eventChange] = useForm(
        {
            name:'',
            email:'',
            password:''
        }
    );
   const {name, email,password}= values

    return (
        <>
            <h1>
                 FormCustom
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
                    onChange={eventChange}
                   
                />
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="correo ejemplo@ejemplo.com"
                    autoComplete="off"
                    value={email}
                    onChange={eventChange}
                   
                />
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="*******"
                    value={password}
                    onChange={eventChange}
                   
                />
            </div>
        
            {(name==='123') && < Mensajes/>}
        </>
    )
}