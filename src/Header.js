import React, { useState } from 'react'
import Counter from './Counter'

 function Header() { 
    const [counter,setCounter]=useState(0)



  
  return (<>
  <Counter counter={counter} setCounter={setCounter}/>
  </>)
};
export default Header;
