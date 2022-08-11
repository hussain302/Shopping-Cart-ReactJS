import React from 'react'
import { Link } from 'react-router-dom';

const Card = (props) => {

    const {title, src, price} = props.product;
    //console.log(price)
    return (
        <div className="card h-100">
            <img src={src} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                {price && <p className="card-text">Price: {price} </p>}
                <Link to="/" className="btn btn-sm btn-success">More</Link>
            </div>
        </div>
    )
}

export default Card
