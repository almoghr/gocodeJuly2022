import React from "react";
import { useContext } from "react";
import MyContext from "../MyContext";

const Container3 = () => {
  const {toggleDarkMode} = useContext(MyContext);
  return (
    <div style={{ width: "600px", height: "600px", border: "4px solid red" }}>
      <button onClick={toggleDarkMode}>toggle dark mode</button>
    </div>
  );
};

export default Container3;
