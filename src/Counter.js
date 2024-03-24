import React from 'react'

function Counter({counter,setCounter}) {
    const plusCounter=()=>{
        if(counter<10){
           setCounter((counter+1)) 
        }else{
            console.log("10 dan büyük olamaz")
        }
    
    }
    const minusCounter=()=>{
        if(counter>0){
             setCounter((counter-1))
        }else{
            console.log("0 dan küçük olamaz")
        }
       
    }

  return (
    <div>
        <label><h1>{counter}</h1></label>
  <button onClick={plusCounter}>+1</button>
  <button onClick={minusCounter}>-1</button>


    </div>
  )
}

export default Counter