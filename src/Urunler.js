import React from 'react'
import List from './List'

function Urunler() {
//Ürün adı
//Markası
//Fiyatı
//Stok Adedi
const urunler=[
    {name:"Bisküvi",
markt:"Eti",
price:15,
stock:0
},
{name:"Gofret",
markt:"Eti",
price:15,
stock:10
},{name:"Nero",
markt:"Eti",
price:15,
stock:3
},{name:"Halley",
markt:"Ülker",
price:1,
stock:100
},{name:"Cici Bebe",
markt:"Eti",
price:150,
stock:5}
]


  return (
    <div>
        Ürünler
        <List  urunler={urunler}/>
    </div>
  )
}

export default Urunler