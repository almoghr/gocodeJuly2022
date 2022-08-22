import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

const NotFound = () => {
const navigate = useNavigate()

    useEffect(()=>{
        const id = setTimeout(() => {
            navigate("/")
        }, 2000);

        return () => {clearTimeout(id)}
    },[])

  return (
    <div>there is no such route please wait and you will be redirected to home page</div>
  )
}

export default NotFound