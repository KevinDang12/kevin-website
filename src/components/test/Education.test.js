import React from "react";
import Education from "../Education";
import { Context as ResponsiveContext } from 'react-responsive';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

/**
 * Test Education Page on Desktop
 */
test("Check the links on Education page for Desktop", () => {
    render(
        <ResponsiveContext.Provider value={{ width: 769 }}>
            <Education />
        </ResponsiveContext.Provider>
    )
    const educationHeader = screen.getByTestId("educationHeader");
    expect(educationHeader.textContent).toBe("Education");
})

/**
 * Test Education Page on Mobile
 */
test("Check the links on Education page for Mobile", () => {
    render(
        <ResponsiveContext.Provider value={{ width: 768 }}>
            <Education />
        </ResponsiveContext.Provider>
    )
    const educationHeader = screen.getByTestId("educationHeaderMobile");
    expect(educationHeader.textContent).toBe("Education");
})