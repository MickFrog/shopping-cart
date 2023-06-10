import React from "react";
import './Cart.css';
import CartProduct from "./cartComponents/cartProduct";

const Cart = (props) => {

    const produceTotal = () => {
        let currCart = props.cartData;

        if(!currCart.length) return 0;

        return currCart.reduce((finalTotal, currElem) => {
            let totalProductsCost = parseFloat(
                (currElem.cartPdt.price * currElem.quantity)
                .toFixed(2))

            return finalTotal + totalProductsCost;
        }, 0)
    }

    return (
        <div className="contentBg cart-container">
            <div className="cart-header">
                <div>
                    Total: {produceTotal()}
                </div>

                <button>Checkout</button>
            </div>

            <div className="cartPdts-container">
                <CartProduct />
                <CartProduct />
                <CartProduct />
                <CartProduct />
                <CartProduct />
            </div>
        </div>
    )

}

export default Cart;