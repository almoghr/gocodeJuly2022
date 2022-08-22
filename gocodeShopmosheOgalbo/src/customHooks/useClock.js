import React, {useState, useEffect} from 'react';

export const useClock = () => {
    const [clock, setClock] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
      const id = setInterval(() => {
        setClock(new Date().toLocaleTimeString());
      }, 1000);
  
      return () => clearInterval(id);
    }, []);
  
    return clock;
  }