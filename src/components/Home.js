import React from 'react'
import Card from './Card';
import CardTwo from './CardTwo';
import Headings from './Headings'
import TopMessage from './TopMessage'


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
      src: "./WebImages/Products/21-377-1_1_.webp"
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
        <img src="./WebImages/logo.png" className="mx-auto d-block" style={{ width: "5%", height: "5%" }} alt="..." />
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
                <div key={product.id} className='col-3'>
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


      <div className='mt-5 container' style={{ backgroundColor: "rgb(240,240,240)", height: "150px" }} >
        <div className='text-center pt-5'>
          <u><h3>TAANKA OFFICIAL<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-stars mb-2" viewBox="0 0 16 16">
            <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />
          </svg> </h3></u>
          <p>A finishing touch to the masculine & feminine feel</p>
        </div>
      </div>
    </>
  )
}
export default Home
