import { useState, useEffect } from "react";

export const useFetch = (url) => {

   const [data, setData] = useState(null)
   const [removeLoader, setRemoveLoader] = useState(false) //false porque ele sempre inicia

   useEffect(() => {
      setTimeout(() => {
         async function fetchData(){
            const res = await fetch(url)
            const json = await res.json()
            
            setData(json)
            setRemoveLoader(true)
         }
         fetchData()
      }, 300)
   }, [url])
   
   return {data, removeLoader}
}