import React, { useState } from 'react'

function SubComp({user,setUser}) {
    const [geciciState,setGeciciState]=useState()
    const changeUser=()=>{

        console.log(geciciState)
        setUser(geciciState)
    }
  return (
    
    <div>
        <label>Sub Component user değeri</label>
        <br />
        <input type="text" defaultValue={user} onChange={(e)=>setGeciciState(e.target.value)}/>
        <button onClick={changeUser}>Change</button>
        </div>
  )
}

export default SubComp