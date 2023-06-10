import React from "react";
import './Cart.css';
import CartProduct from "./cartComponents/cartProduct";
import uniqid from 'uniqid';

const Cart = (props) => {
    let cartItems = props.cartData;

    const produceTotal = () => {
        let currCart = props.cartData;

        if(!currCart.length) return 0;

        let overallTotal =  currCart.reduce((finalTotal, currElem) => {
            let totalProductsCost = currElem.cartPdt.price * currElem.quantity;

            return finalTotal + totalProductsCost;
        }, 0)

        return parseFloat(overallTotal.toFixed(2))
    }

    const handleCheckout = () => {
        alert("You spent $" + produceTotal() + " at Mick-Grocies")
    }

    return (
        <div className="contentBg cart-container">
            <div className="cart-header">
                <div>
                    Total: {produceTotal()}
                </div>

                <button onClick={handleCheckout}>Checkout</button>
            </div>

            <div className="cartPdts-container">
                {
                    cartItems.map((currItem) => {
                        return <CartProduct key={uniqid()} itemDetails={currItem} cartCallback={props.cartCallback}/>
                    })
                }
            </div>
        </div>
    )

}

export default Cart;