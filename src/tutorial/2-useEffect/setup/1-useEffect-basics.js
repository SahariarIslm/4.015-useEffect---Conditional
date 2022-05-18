import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value,setValue] = useState(0);
  // we cannon place the hooks inside conditional statements
  // however we can use condition inside a hook 
    useEffect(()=>{
      console.log('call useEffect');
      if(value>0){
        document.title = `New Messages(${value})`;
      }
    });
  
  console.log('render component');
  return <>
    <h1>{value}</h1>
    <button className='btn' onClick={()=>setValue(value+1)}>
      Click Me
    </button>
  </>;
};

export default UseEffectBasics;
