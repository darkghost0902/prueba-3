import { useState } from "react"

export const useForm=(valorInicial={})=>{

    const [form, setform] = useState(valorInicial)

    const inputChange = ({target})=>{
      
      const { name, value } = target;
      setform({
          ...form,
          [ name ]: value
      });
     }
     const resetform = () => {
      setform( valorInicial );
  }
     return {...form, form, inputChange, resetform}

    }
    



