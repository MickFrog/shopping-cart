import React from "react";
import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import CartProduct from "./cartProduct";

describe("Testing pdt addition to cart", () => {
    const addToCartCallback = jest.fn((pdtDetails, num) => {
        console.log(pdtDetails + " " + num + "added to cart");
    });
    
    const testingData = {
        cartPdt: {
            imageSrc: "./someLocation",
            product: "cow",
            price: "$4.56"
        },
        quantity: 2
    }

    it("Callback function to be called when qty addition btn is clicked", () => {
        render(<CartProduct itemDetails={testingData} cartCallback={addToCartCallback}/>)

        const addBtn = screen.getByRole('button', {name: /\+/i});

        // eslint-disable-next-line testing-library/no-unnecessary-act
        act(() => {
            userEvent.click(addBtn);
            userEvent.click(addBtn);
        }) 

        expect(addToCartCallback).toHaveBeenCalledTimes(2);
    })

    it("Callback function to be called when qty deduction btn is clicked", () => {
        render(<CartProduct itemDetails={testingData} cartCallback={addToCartCallback}/>)

        const deductBtn = screen.getByRole('button', {name: /−/i});

        // eslint-disable-next-line testing-library/no-unnecessary-act
        act(() => {
            userEvent.click(deductBtn);
            userEvent.click(deductBtn);
        }) 

        expect(addToCartCallback).toHaveBeenCalledTimes(2);
    })
})