import React from "react";
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
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<App />}/>
                <Route path="/shop" element={<Shop items={stock}/>}/>
                <Route path="/cart" element={<Cart />}/>
            </Routes>

            <Footer />
        </BrowserRouter>
    )
}

export default RouteSwitch;
