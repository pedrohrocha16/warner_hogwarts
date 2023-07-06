import { useState, useEffect } from "react";

export const useFetch = (url) => {

   const [data, setData] = useState(null)
   const [removeLoader, setRemoveLoader] = useState(false) //false porque ele sempre inicia

   useEffect(() => {
      setRemoveLoader(true)
      async function fetchData(){
         const res = await fetch(url)
         const json = await res.json()
         
         setData(json)
      }
      fetchData()
   }, [url])
   
   return {data, removeLoader}
}