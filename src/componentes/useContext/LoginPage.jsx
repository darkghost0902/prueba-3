import { UserContext } from "./context/UserContext"
import { useContext } from "react"


export const LoginPage = ()=>{
   
    const {user, setuser}= useContext(UserContext);
    console.log(user);

    return (
        <>
        <h1>LoginPage</h1>
        <pre>
            {JSON.stringify(user,null,3)}
        </pre>
        <button  className="btn btn-primary"  onClick={()=>setuser({id:123, name:'luis', correo: 'luis@xD.com'})}>
            Establecer usuario
        </button>
        </>
    )
}