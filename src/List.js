import React from 'react'

function List({urunler}) {
  return (
   <>
  { urunler.map((urun,index) =>{
    if(urun.stock>0){
      return(
   <div key={index}>
    <div>Ürün:{urun.name} </div>
    <div>Marka: {urun.markt} </div>
    <div>Fiyat: {urun.price}</div>
    <div>Stok: {urun.stock}</div>
    </div>  )         
    }else{
        return null
    }

   })}
   </>
  )
}

export default List