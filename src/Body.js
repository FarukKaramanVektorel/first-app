import React from 'react'

function Body() {
    var users=[{
        username:"Admin",
        password:"1234",
        email:"admin@admin.com",
        city:"",
        age:45
       },
       {username:"User",
        password:"1234",
        email:"User@admin.com",
        city:"Ankara",
        age:""
       },
       {username:"User1",
       password:"1234",
       email:"User@admin.com",
       city:"Adana",
       age:""
      },
      {username:"User2",
      password:"1234",
      email:"User@admin.com",
      city:"Kayseri",
      age:30
     }
    ]
       

  return (
    <div className='urun'>
    {users.map((user,index) =>(
       <div key={index}>
   <div>Kullanıcı Adı: {user.username}</div>
    <div>Parola: {user.password}</div>
    <div>E-Posta: {user.email}</div>
    <div>Şehir: {user.city ? user.city:"Yok"}</div>
    {user.age && <div>Yaş: { user.age}</div>}
    <hr />
       </div>
    ))}
   
       </div>
  )
}

export default Body