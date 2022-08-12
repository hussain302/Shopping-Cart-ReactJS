import React from 'react'
import Headings from './Headings';
import ShopNavbar from './ShopNavbar';
import Card from './Card';
import Slogan from './Slogan'


const Women = () => {

  const Collections = [
    {
      id: 1,
      title: "Jet Black Shalwar Kameez",
      src: "./WebImages/Womens/p1.webp",
      price: 4000,
      sizes: "S, M, L, XL"
    },
    {
      id: 2,
      title: "Gray Trouser Kameez",
      src: "./WebImages/Womens/p2.webp",
      price: 3000,
      sizes: "S, M, L, XL"
    },
    {
      id: 3,
      title: "Silver Trouser Kameez",
      src: "./WebImages/Womens/p3.webp",
      price: 4500,
      sizes: "S, M, L, XL"
    },
    {
      id: 4,
      title: "Black Shalwar Kameez",
      src: "./WebImages/Womens/p4.webp",
      price: 5999,
      sizes: "S, M, L, XL"
    },
    {
      id: 5,
      title: "Brown Shalwar Kameez",
      src: "./WebImages/Womens/p5.webp",
      price: 2599,
      sizes: "S, M, L, XL"
    },
    {
      id: 6,
      title: "Simple Shalwar Kameez",
      src: "./WebImages/Womens/p6.webp",
      price: 3499,
      sizes: "S, M, L, XL"
    },

  ];

  return (
    <div>
      <ShopNavbar />
      <h1 className='text-center'>
        <Headings heading="Women Collection" />
      </h1>

      <div className='container'>
        <div className='row'>
          {
            Collections.map(product => {
              return (
                <div key={product.id} className='col-4 mt-4'>
                  <Card product={product} />
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

export default Women;
