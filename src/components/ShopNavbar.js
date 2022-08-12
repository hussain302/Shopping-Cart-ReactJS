import React from 'react'
import { Link } from "react-router-dom"
const ShopNavbar = () => {
    return (
        <>
            <div className='mb-3 p-1' style={{ backgroundColor: "white" }}>
                <Link to="/"> <img src="./WebImages/logo.png" className="mx-auto d-block" style={{ width: "5%", height: "5%" }} alt="..." /></Link>
            </div>
            <div style={{ backgroundColor: "rgb(240,240,240)" }}>
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link className="nav-link active text-dark" to="/men">Men</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active text-dark" to="/women">Women</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active text-dark" to="/fragrances">Fragrances</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active text-dark" to="/teens" aria-disabled="true">Teens</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default ShopNavbar
