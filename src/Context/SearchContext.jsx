import axios from "axios";
import { createContext, useEffect, useState } from "react";




export let SearchContext = createContext() ;

export default function SearchContextProvider ({children}) {
 
    const [wordSearch, setWordSearch] = useState('')
    const [itemsArray, setItemsArray] = useState([])

   
    function search(e) {
        setWordSearch(e.target.value)
    }
  



    return <SearchContext.Provider value= {{search , wordSearch , itemsArray, setItemsArray}}>
            {children}
    </SearchContext.Provider>
}