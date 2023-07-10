import React from "react";
import "./product.css";

const Product = (props) => {
    const addCart = () => {
        props.cartCallback(props.productDetails, 1);
    };

    return (
        <div className="pdt-container">
            <img
                className="pdt-image"
                src={props.productDetails.imageSrc}
                alt={props.productDetails.product}
            />

            <div className="pdt-name">{props.productDetails.product}</div>
            <div className="pdt-price">{"$" + props.productDetails.price}</div>
            <button className="addCart-Btn" onClick={addCart}>
                Add to cart
            </button>
        </div>
    );
};

export default Product;
