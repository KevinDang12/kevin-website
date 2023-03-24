import React from "react";
import { Context as ResponsiveContext } from 'react-responsive'
import { render, screen } from '@testing-library/react'
import Home from './Home';
import Contact from "./Contact";
import "@testing-library/jest-dom/extend-expect"

test("Title renders with correct text", () => {
    render(<Home />);
    const headerElement = screen.getByTestId("header");
    expect(headerElement.textContent).toBe("Hi. I'm Kevin.");
})

function links() {
    const linkedinUrl = screen.getByTestId("linkedin");
    expect(linkedinUrl).toHaveAttribute('href',"https://www.linkedin.com/in/kevin-dang-comptech/");

    const githubUrl = screen.getByTestId("github");
    expect(githubUrl).toHaveAttribute('href',"https://github.com/KevinDang12");

    const resume = screen.getByTestId("resume");
    expect(resume).toHaveAttribute('href',"Resume.pdf");
}

test("Check the links on desktop Contact page", () => {
    render(
        <ResponsiveContext.Provider value={{ width: 800 }}>
            <Contact />
        </ResponsiveContext.Provider>
    )

    links();
})

test("Check the links on mobile Contact page", () => {
    render(
        <ResponsiveContext.Provider value={{ width: 799 }}>
            <Contact />
        </ResponsiveContext.Provider>
    )

    links();
})