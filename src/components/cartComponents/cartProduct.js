import React from "react";
import './cartProduct.css';

const CartProduct = (props) => {

    const itemDetails = props.itemDetails.cartPdt;
    const itemQty = props.itemDetails.quantity;

    const reduceQty = () => {
        props.cartCallback(itemDetails, -1);
    }

    const addQty = () => {
        props.cartCallback(itemDetails, 1);
    }

    return (
        <div className="pdt-container">
            <img className="pdt-image" src={itemDetails.imageSrc} alt={itemDetails.product} />

            <div className="pdt-name">{itemDetails.product}</div>
            <div className="pdt-price">{"$" + (itemDetails.price * itemQty).toFixed(2)}</div>
            <div className="quantity-display">
                <button onClick={reduceQty}>&minus;</button>
                <div>{itemQty}</div>
                <button onClick={addQty}>+</button>
            </div>
        </div>
    )
}

export default CartProduct;