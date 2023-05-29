import React from "react";
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="myHeader">
            <div className="storeName">
                <Link to='/'>
                    <h1>Mick-Store</h1>
                </Link>
            </div>

            <div className="nav-links">
                <Link to='/shop'>
                    <div>Shop</div>
                </Link>

                <Link to='/cart'>
                    <div>Cart</div>
                </Link>
            </div>
        </div>
    )

}

export default Header;