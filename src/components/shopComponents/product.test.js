import React from "react";
import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import Product from "./product";

describe("Testing pdt addition to cart", () => {
    const addToCartCallback = jest.fn((pdtDetails, num) => {
        console.log(pdtDetails + " " + num + "added to cart");
    });
    
    const testingData = {
        imageSrc: "./someLocation",
        product: "cow",
        price: "$4.56"
    }

    it("Callback function to be called when add to cart button is clicked", () => {
        render(<Product productDetails={testingData} cartCallback={addToCartCallback}/>)

        const addBtn = screen.getByRole('button');

        // eslint-disable-next-line testing-library/no-unnecessary-act
        act(() => {
            userEvent.click(addBtn);
            userEvent.click(addBtn);
            userEvent.click(addBtn);
        }) 

        expect(addToCartCallback).toHaveBeenCalledTimes(3);
    })
})