import React from 'react'
import Headings from './Headings';
import ShopNavbar from './ShopNavbar';
import Slogan from './Slogan'
import CardTwo from './CardTwo'

const Shop = () => {
  const Collections = [
    {
      id: 1,
      title: "Women",
      src: "./WebImages/Products/22-316_1_.webp"
    },
    {
      id: 2,
      title: "Men",
      src: "./WebImages/Products/3005_black.webp"
    },
    {
      id: 3,
      title: "Fragrances",

      src: "./WebImages/Products/essence1_1.webp"
    },
    {
      id: 4,
      title: "Teens",
      src: "./WebImages/Products/kid.webp"
    }
  ];
  return (
    <div className='container'>
      <ShopNavbar/>
      <div>
        <Headings heading="Welcome to the shop" />
      </div>
  
      <div className='container'>
        <div className='row'>
          {
            Collections.map(product => {
              return (
                <div key={product.id} className='col-3'>
                   <CardTwo product={product} /> 
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

export default Shop;
