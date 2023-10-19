import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let FavoriteContext = createContext(0);

export default function FavoriteContextprovider({ children }) {
  const [favariteArr, setFavariteArr] = useState([])
    const [warning, setwarning] = useState('')
    const [signInNow, setSignInNow] = useState('')
    const [count, setCount] = useState(0)


    function addToFavarite(movie) {

      if (localStorage.getItem('userToken') !== null) {
          if (favariteArr == []) {
              setFavariteArr(movie)
              setCount(1)
              localStorage.setItem('count', 1)
          } else {
              favariteArr.push(movie)
              localStorage.setItem('count', Array.from(new Set(favariteArr)).length)
              setCount(Array.from(new Set(favariteArr)).length)

          }
          localStorage.setItem('favariteArr', JSON.stringify(favariteArr))



      } else {

          setwarning('You must Sign In before you can add item to favarite')
          setSignInNow(' Sign In Now')


      }
  }


  function clearAll() {
    localStorage.removeItem('favariteArr')
    setFavariteArr([])
    setCount(0)
}


function clearItem(movie) {

  if (favariteArr.length == 1) {
      clearAll()
  } else {
      setFavariteArr(favariteArr.filter(function (item) {
          return item !== movie;
      }))
      localStorage.setItem('favariteArr', JSON.stringify(favariteArr.filter(function (item) {
          return item !== movie;
      })))
      setCount(count - 1)
  }


}
  
  return (
    <FavoriteContext.Provider
    value={{
      setCount, setFavariteArr, signInNow, count, addToFavarite, warning, favariteArr, clearAll, clearItem 
    }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}
