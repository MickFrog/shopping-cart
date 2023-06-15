import React from "react";
import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import RouteSwitch from "./RouteSwitch";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

describe('Testing changed routes on user events', () => {
    it('Default page loaded', () => {
        render(<RouteSwitch />);

        expect(screen.getByText(/My Home Page/i)).toBeInTheDocument();
    })

    it('Load home page on clicking store name', () => {
        render(<RouteSwitch />);

        const storeName = screen.getByRole('heading');

        // eslint-disable-next-line testing-library/no-unnecessary-act
        act(() => {
            userEvent.click(storeName);
        })

        expect(screen.getByText(/My Home Page/i)).toBeInTheDocument();
    })

    it('Load shopping page on user clicking shop link', () => {
        render(<RouteSwitch />) 
        
        const shopName = screen.getByTestId('shop-text-test');

        // eslint-disable-next-line testing-library/no-unnecessary-act
        act(() => {
            userEvent.click(shopName);
        })

        expect(screen.getByText(/My Shop/i)).toBeInTheDocument();
    })

    it('Load cart page on user clicking cart link', () => {
        render(<RouteSwitch />) 
        
        const cartText = screen.getByTestId('cart-text-test');

        // eslint-disable-next-line testing-library/no-unnecessary-act
        act(() => {
            userEvent.click(cartText);
        })

        expect(screen.getByText(/My Cart/i)).toBeInTheDocument();
    })
})