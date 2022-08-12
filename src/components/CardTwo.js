import React from 'react'
import { Link } from 'react-router-dom';

const Card = (props) => {

    const {title, src} = props.product;
    return (
        
        <div className="card h-100">
            <div className="card-body text-center">
                <h5 className="card-title" style={{fontSize:"1.7vw"}}>{title.toUpperCase()}</h5>       
            </div>
            <Link to={"/"+title.toLowerCase()} ><img src={src} className="card-img" alt={title} /></Link>
        </div>
    )
}

export default Card
