import { useEffect, useRef, useState } from "react"

export const useFetch= (url)=>{
    
    const isMount =useRef(true);
    const [first, setfirst] = useState({loading:true, error: null,data:null});

    useEffect(()=>{
        return ()=> {
            isMount.current=false
        }
    },[])

    useEffect(()=>{
        setfirst({loading:true, error: null,data:null});
        fetch( url )
        .then(respon=>respon.json())
        .then(data=>{
            if( isMount.current){

                //setTimeout(()=>{
                    setfirst({
                        loading: false,
                        error: null,
                        data
                    })
                //},3000)
            }
        })
    },[url]);

    return first;
}