import React from "react";
import './Shop.css';
import productsData from './shopComponents/products.json'

function getProducts() {
    console.table(productsData.groceries);
}

const Shop = () => {
    getProducts();
    return (
        <div className="contentBg shop-container">
            My Shop
        </div>
    )

}

export default Shop;