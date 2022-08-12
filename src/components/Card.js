import React from 'react'
import { Link } from 'react-router-dom';

const Card = (props) => {

    const { title, src, price, sizes} = props.product;
    //console.log(price)
    return (
        <div className="card h-100">
            <img src={src} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "1.7vw" }}>{title}</h5>
                {price && <p className="card-text">Price: <b>{price} </b></p>}
                {sizes && <p className="card-text">Sizes: <b>{sizes}</b> </p>}
                <div className='row'>
                    <Link to="/" title='Buy now' className="btn btn-sm btn-outline-dark col m-1" >  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag-plus-fill" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z" />
                    </svg> </Link>
                    <Link to="/" title='Add to cart' className="btn btn-sm btn-dark col m-1" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-plus" viewBox="0 0 16 16">
                        <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                    </svg> </Link>
                </div>
            </div>
        </div>
    )
}

export default Card
