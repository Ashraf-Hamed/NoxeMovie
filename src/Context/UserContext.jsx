import axios from "axios";
import { createContext, useEffect, useState } from "react";


export let UserContext  = createContext();


export default function UserContextProvider({children}) {

    let [userToken , setUserToken] = useState(null)

   
    

    
    return <UserContext.Provider value={{userToken , setUserToken }}>
    
        {children}
    
    </UserContext.Provider>
}