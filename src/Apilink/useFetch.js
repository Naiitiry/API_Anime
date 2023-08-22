import { useState,useEffect } from "react";

const useFetch = (url) =>{
    const [data,setData] = useState(0)
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)

    useEffect(()=>{
        fetch(url)
            .then((response)=>response.json())
            .then((data)=>setData(data))
            .catch((error)=>{
                setError(error)
            })
            .finally(()=>setLoading(false))
    },[url])
    return {data,error,loading}
}
export {useFetch}