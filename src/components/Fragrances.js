import React from 'react'
import ShopNavbar from './ShopNavbar'
import Headings from './Headings'
import Card from './Card';
import Slogan from './Slogan'
const Fragrances = () => {
  const Collections = [
    {
      id: 1,
      title: "Exclusive",
      src: "./WebImages/Fragrances/p2.webp",
      price: 3000,
     
    },
    {
      id: 2,
      title: "Ouod by J.",
      src: "./WebImages/Fragrances/p4.webp",
      price: 3000,
   
    },
    {
      id: 3,
      title: "Essence",
      src: "./WebImages/Fragrances/p3.webp",
      price: 4500,
    },
    {
      id: 4,
      title: "Exclusive",
      src: "./WebImages/Fragrances/p4.webp",
      price: 5999,
    },
    {
      id: 5,
      title: "Atter-E-Rohaan",
      src: "./WebImages/Fragrances/p5.webp",
      price: 2599,
    },
    {
      id: 6,
      title: "Prestige",
      src: "./WebImages/Fragrances/p6.webp",
      price: 3499,
    },
  ]
  return (
    <div>
      <ShopNavbar />
      <h1 className='text-center'>
        <Headings heading="Fragrances Collection" />
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

export default Fragrances
