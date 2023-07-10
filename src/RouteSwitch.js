import React, { useCallback, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import App from "./App";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import products from "./products.json";

//load products from JSON file
const stock = products.groceries;

const RouteSwitch = () => {
    const [cart, setCart] = useState([]);
    /*Format: cart = [{
     *     cartPdt: {pdt},
     *     quantity: number eg 1
     *    },...]
     */

    const updateCart = useCallback(
        (pdt, bAction) => {
            //bAction ie 1-add or (-1)-remove
            const productInCart = cart.filter((elem) => elem.cartPdt === pdt);

            if (productInCart.length > 0) {
                let updatedCart = [];
                let elemRemoved = false;

                updatedCart = cart.map((elem) => {
                    //modify cart
                    if (elem.cartPdt === pdt) {
                        elem.quantity += bAction;

                        if (elem.quantity < 1) {
                            elemRemoved = true;
                            return undefined;
                        }
                    }
                    return elem;
                });

                if (elemRemoved) {
                    //filter out removed cart Elements
                    updatedCart = updatedCart.filter(
                        (currElem) => currElem !== undefined
                    );
                }

                setCart(updatedCart);
                return;
            }

            //Product not in cart
            setCart([
                ...cart,
                {
                    cartPdt: pdt,
                    quantity: 1,
                },
            ]);
        },
        [cart]
    );

    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        //update cartCount onChange of cart
        if (cart.length < 1) return; //prevent running on empty cart

        let newCount = cart.reduce((total, elem) => {
            return total + elem.quantity;
        }, 0);

        setCartCount(newCount);
    }, [cart]);

    return (
        <HashRouter>
            <Header cartCount={cartCount} />

            <Routes>
                <Route path="/" element={<App />} />
                <Route
                    path="/shop"
                    element={<Shop items={stock} cartCallback={updateCart} />}
                />
                <Route
                    path="/cart"
                    element={<Cart cartData={cart} cartCallback={updateCart} />}
                />
            </Routes>

            <Footer />
        </HashRouter>
    );
};

export default RouteSwitch;
