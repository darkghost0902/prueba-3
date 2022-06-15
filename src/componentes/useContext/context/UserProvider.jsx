import { useState } from "react"
import { UserContext } from "./UserContext"


export const UserProvider =({children})=>{
    // const user = {
    //     id:1,
    //     name:"fernando",
    //     email: "fernando@xD.com"
        
    // }
    const [user, setuser] = useState()
    return (
        
        <UserContext.Provider value={{user, setuser}} >
            { children}
        </UserContext.Provider>
    )
}