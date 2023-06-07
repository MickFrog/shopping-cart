import React from "react";
import './product.css';

const Product = (props) => {
    const imageUrl = '../.' + props.image;
    return (
        <div className="pdt-container">
            <img className="pdt-image" src={imageUrl} alt={props.name} />

            <div className="pdt-name">{props.name}</div>
            <div className="pdt-price">{props.price}</div>
            <button className="addCart-Btn">Add to cart</button>
        </div>
    )
}

export default Product;