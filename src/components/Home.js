import React from 'react'
import Card from './Card';
import CardTwo from './CardTwo';
import Headings from './Headings'
import TopMessage from './TopMessage'
import Slogan from './Slogan'
import { Link } from 'react-router-dom';

const Home = () => {

  const trendingProducts = [
    {
      id: 1,
      title: "Product-1",
      price: 3000,
      src: "./WebImages/Products/stitched_1_1.webp"
    },
    {
      id: 2,
      title: "Product-2",
      price: 5000,
      src: "./WebImages/Products/22-316_1_.webp"
    },
    {
      id: 3,
      title: "Product-3",
      price: 6999,
      src: "./WebImages/Products/jpws-22-299-1_1__1.webp"
    },
    {
      id: 4,
      title: "Product-4",
      price: 3799,
      src: "./WebImages/Products/22-323_1__1.webp"
    }
  ];

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
    <>
      <TopMessage />
      <div className='mb-3 p-1' style={{ backgroundColor: "white" }}>
        <Link to="/"> <img src="./WebImages/products/logo.png" className="mx-auto d-block" style={{ width: "5%", height: "5%" }} alt="..." /></Link>
      </div>

      <div className='container'>
        <div>
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="./WebImages/banner1.webp" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="./WebImages/banner2.webp" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="./WebImages/banner3.webp" className="d-block w-100" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      <div className='mb-3'>
        <Headings heading="Top Trending" />
      </div>

      <div className='container'>
        <div className='row'>
          {
            trendingProducts.map(product => {
              return (
                <div key={product.id} className='col-3 mt-4'>
                  <Card product={product} />
                </div>
              )
            })
          }
        </div>
      </div>


      <div className='mb-3'>
        <Headings heading="Our Collection" />
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
    </>
  )
}
export default Home
