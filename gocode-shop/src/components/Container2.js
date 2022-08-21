import React from 'react'
import Container3 from './Container3'
import { useContext } from "react";
import MyContext from "../MyContext";

const Container2 = () => {
  const {toggleShowButton ,handleCounterPlus, handleCounterMinus} = useContext(MyContext);

  return (
    <div style={{width: '700px', height:'700px', border:'4px solid yellow'}}>
      <button onClick={toggleShowButton}>toggleShowButton</button>
      <button onClick={handleCounterPlus}>handleCounterPlus</button>
      <button onClick={handleCounterMinus}>handleCounterMinus</button>
      <Container3 />
    </div>
  )
}

export default Container2