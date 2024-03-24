import React, { useState } from 'react'
import SubComp from './SubComp'

function Footer() {
  const [user,setUser]=useState("Vektörel")
  return (
    <div>
      <label> Footer component user değeri: {user}</label>
      <br />
<SubComp user={user} setUser={setUser}/>

    </div>
  )
}

export default Footer