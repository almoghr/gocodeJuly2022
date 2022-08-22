import { clear } from 'console'
import { read } from 'fs'
import React from 'react'
import React, { useEffect, useState } from 'react'

export function useApiData({testApi}) {

  const [listOpject, setListOpject] = useState([])
  const [changeView, setChangeView] = useState(true)
  const getApiData = async () => {
    try {
      const responseApi = await fetch(testApi)
      const data = await responseApi.json()
      console.log(data)
      setListOpject(data)
      setChangeView(false)

    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    console.log(changeView)
    getApiData()
   return clear(changeView)

  }, [])
  
    return  listOpject;

}

