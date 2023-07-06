import { useState, useEffect } from "react";

export const useFetch = (url) => {

   const [data, setData] = useState(null)
   const [loader, setLoader] = useState(false)

   useEffect(() => {
      async function fetchdata() {
         const res = await fetch(url)

         const json = await res.json()

         setData(json)
      }
      fetchdata()
   }, [url])

   return {data}
}