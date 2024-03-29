import React, { useEffect, useState } from 'react'
import Headings from './Headings'
import ShopNavbar from './ShopNavbar';
import Card from './Card';
import Slogan from './Slogan'



const Men = () => {
  
  const [data, setData] = useState([]); 

  async function fetchdata() {
   await fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setData(json))

    console.table(data)

  }
  useEffect(() => {
    fetchdata();
  });

  // const Collections = [
  //   {
  //     id: 1,
  //     title: "Jet Black Shalwar Kameez",
  //     src: "./WebImages/Mens/p1.webp",
  //     price: 4000,
  //     sizes: "S, M, L, XL"
  //   },
  //   {
  //     id: 2,
  //     title: "Gray Trouser Kameez",
  //     src: "./WebImages/Mens/p2.webp",
  //     price: 3000,
  //     sizes: "S, M, L, XL"
  //   },
  //   {
  //     id: 3,
  //     title: "Silver Trouser Kameez",
  //     src: "./WebImages/Mens/p3.webp",
  //     price: 4500,
  //     sizes: "S, M, L, XL"
  //   },
  //   {
  //     id: 4,
  //     title: "Black Shalwar Kameez",
  //     src: "./WebImages/Mens/p4.webp",
  //     price: 5999,
  //     sizes: "S, M, L, XL"
  //   },
  //   {
  //     id: 5,
  //     title: "Brown Shalwar Kameez",
  //     src: "./WebImages/Mens/p5.webp",
  //     price: 2599,
  //     sizes: "S, M, L, XL"
  //   },
  //   {
  //     id: 6,
  //     title: "Simple Shalwar Kameez",
  //     src: "./WebImages/Mens/p6.webp",
  //     price: 3499,
  //     sizes: "S, M, L, XL"
  //   },
    
  // ];

  return (
    <div className='container'>
      <ShopNavbar/>
      <div className='text-center'> 
        <Headings heading="Men's Collection" />
      </div>

      <div className='container'>
        <div className='row'>
          {
            data.map(product => {
              return (
                <div key={product.id} className='col-6 mt-4'>
                  {                
                    product.category == "men's clothing" && <Card product={product} />
                  }
                </div>
              )
            })
          }
        </div>
      </div>


      <Slogan/>
    </div>
  )
}

export default Men;
