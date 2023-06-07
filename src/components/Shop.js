import React from "react";
import './Shop.css';
import Product from "./shopComponents/product";
import beefImg from '../assets/products/beef.jpg'

const Shop = () => {

    return (
        <div className="contentBg shop-container">
            <Product name="Beef" price="$2.4" image={beefImg} />
            <Product name="Beef" price="$2.4" image={beefImg} />
            <Product name="Beef" price="$2.4" image={beefImg} />
            <Product name="Beef" price="$2.4" image={beefImg} />
            <Product name="Beef" price="$2.4" image={beefImg} />
            <Product name="Beef" price="$2.4" image={beefImg} />
        </div>
    )

}

export default Shop;