import React, { memo } from "react";

export const Small = memo(({valor})=>{

    console.log("mostrando el small");

    return (
        <small>:{valor}</small>
    );
})