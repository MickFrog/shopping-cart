import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import App from './App';
import Shop from "./components/Shop";
import Cart from "./components/Cart";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<App />}/>
                <Route path="/shop" element={<Shop />}/>
                <Route path="/cart" element={<Cart />}/>
            </Routes>

            <Footer />
        </BrowserRouter>
    )
}

export default RouteSwitch;
