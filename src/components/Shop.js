import React from "react";
import './Shop.css';
import Product from "./shopComponents/product";
import uniqid from 'uniqid';

const Shop = (props) => {
    const shopItems = props.items

    return (
        <div className="contentBg shop-container">
            {
                shopItems.map((currPdt) => {
                    return <Product key={uniqid()} name={currPdt.product} price={currPdt.price} image={currPdt.imageSrc} />
                })
            }
        </div>
    )

}

export default Shop;