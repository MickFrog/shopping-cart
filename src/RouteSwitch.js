import React, { useCallback, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import App from './App';
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import products from './products.json';

//load products from JSON file
const stock = products.groceries;

const RouteSwitch = () => {
    const [cart, setCart] = useState([]);
    /*Format: cart = [{
    *     cartPdt: {pdt},
    *     quantity: number eg 1
    *    },...]
    */

    const updateCart = useCallback((pdt, bAction) => { //bAction ie 1-add or (-1)-remove
        const productInCart = cart.filter((elem) => elem.cartPdt === pdt);
        
        if(productInCart.length > 0) {
            let updatedCart = [];
            let elemRemoved = false;

            updatedCart = cart.map((elem) => { //modify cart
                if(elem.cartPdt === pdt) {
                    elem.quantity += bAction;
                    
                    if(elem.quantity < 1) {
                        elemRemoved = true;
                        return undefined;
                    }
                }
                return elem;
            })

            if(elemRemoved) { //filter out removed cart Elements
                updatedCart = updateCart.filter((currElem) => currElem !== undefined)
            }

            setCart(updatedCart)
            console.log(cart)
            return;
        }

        //Product not in cart
        setCart([...cart, {
            cartPdt: pdt,
            quantity: 1
        }]);
        console.log(cart)
    }, [cart])

    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<App />}/>
                <Route path="/shop" element={<Shop items={stock} cartCallback={updateCart}/>}/>
                <Route path="/cart" element={<Cart />}/>
            </Routes>

            <Footer />
        </BrowserRouter>
    )
}

export default RouteSwitch;
