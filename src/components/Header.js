import React from "react";
import './Header.css';
import { Link } from "react-router-dom";
import cartImage from '../assets/cartImage.svg'

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
                    <div data-testid="shop-text-test">Shop</div>
                </Link>

                <Link to='/cart'>
                    <div className="shopperCart" data-count="3" data-testid="cart-text-test">
                        Cart
                        <img src={cartImage} alt="cart_img"/>
                    </div>
                </Link>
            </div>
        </div>
    )

}

export default Header;