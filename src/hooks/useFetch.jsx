import { useState, useEffect } from "react";

export const useFetch = (url) => {

   const [data, setData] = useState(null)
   const [removeLoader, setRemoveLoader] = useState(false) //false porque ele sempre inicia

   useEffect(() => {
      async function fetchdata() {
            const res = await fetch(url)
   
            const json = await res.json()
   
            setData(json)
            setRemoveLoader(true)
         }
            fetchdata()
   }, [url])

   return {data, removeLoader}
}