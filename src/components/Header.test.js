import React from "react";
import { render, screen } from '@testing-library/react';
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";

describe("Header component testing", () => {
    it('All text elements rendered', () => {
        //wrapped around BrowserRouter due to presence of Link Component in Header that requires 
        //BrowserRouter else will throw TypeError
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );

        //get text elements
        //tests done before addition of components so may fail with filled out components
        const storeName = screen.getByRole('heading');
        const shopName = screen.getByTestId('shop-text-test');
        const cartText = screen.getByTestId('cart-text-test');

        expect(storeName.textContent).toMatch(/Mick-Store/i);
        expect(shopName.textContent).toMatch(/Shop/i);
        expect(cartText.textContent).toMatch(/Cart/i);
    });
});