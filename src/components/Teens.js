import React from 'react';
import Headings from './Headings';
import ShopNavbar from './ShopNavbar';
import Card from './Card';
import Slogan from './Slogan'
const Teens = () => {

  const Collections = [
    {
      id: 1,
      title: "Exclusive",
      image: "./WebImages/Teens/6.webp",
      price: 3000,
     
    },
    {
      id: 2,
      title: "Ouod by J.",
      image: "./WebImages/Teens/4.webp",
      price: 3000,
   
    },
    {
      id: 3,
      title: "Essence",
      image: "./WebImages/Teens/3.webp",
      price: 4500,
    },
    {
      id: 4,
      title: "Exclusive",
      image: "./WebImages/Teens/2.webp",
      price: 5999,
    },
    {
      id: 5,
      title: "Atter-E-Rohaan",
      image: "./WebImages/Teens/5.webp",
      price: 2599,
    },
    {
      id: 6,
      title: "Prestige",
      image: "./WebImages/Teens/6.webp",
      price: 3499,
    },
  ]

  return (
    <div>
      <ShopNavbar/>
      <h1 className='text-center'> 
        <Headings heading="Teens Collection" />
       </h1>
       <div className='container'>
        <div className='row'>
          {
            Collections.map(product => {
              return (
                <div key={product.id} className='col-6 mt-4'>
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

export default Teens;
