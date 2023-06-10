import React from "react";
import './cartProduct.css';

const CartProduct = (props) => {

    return (
        <div className="pdt-container">
            <img className="pdt-image" src="./products/chicken.jpg" alt="Kalooli" />

            <div className="pdt-name">Name here</div>
            <div className="pdt-price">Total cost for amount here</div>
            <div className="quantity-display">
                <button>&minus;</button>
                <div>qty</div>
                <button>+</button>
            </div>
        </div>
    )
}

export default CartProduct;