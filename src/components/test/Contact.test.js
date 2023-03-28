import React from "react";
import Contact from '../Contact';
import { Context as ResponsiveContext } from 'react-responsive';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

/**
 * Test Contact Page on Desktop
 */
test("Check the links on Contact page for Desktop", () => {
    render(
        <ResponsiveContext.Provider value={{ width: 769 }}>
            <Contact />
        </ResponsiveContext.Provider>
    )

    const linkedinUrl = screen.getByTestId("linkedin");
    expect(linkedinUrl).toHaveAttribute('href',"https://www.linkedin.com/in/kevin-dang-comptech/");

    const githubUrl = screen.getByTestId("github");
    expect(githubUrl).toHaveAttribute('href',"https://github.com/KevinDang12");

    const resume = screen.getByTestId("resume");
    expect(resume).toHaveAttribute('href',"Resume.pdf");
})

/**
 * Test Contact Page on Mobile
 */
test("Check the links on Contact page for Mobile", () => {
    render(
        <ResponsiveContext.Provider value={{ width: 768 }}>
            <Contact />
        </ResponsiveContext.Provider>
    )

    const linkedinUrl = screen.getByTestId("linkedinMobile");
    expect(linkedinUrl).toHaveAttribute('href',"https://www.linkedin.com/in/kevin-dang-comptech/");

    const githubUrl = screen.getByTestId("githubMobile");
    expect(githubUrl).toHaveAttribute('href',"https://github.com/KevinDang12");

    const resume = screen.getByTestId("resumeMobile");
    expect(resume).toHaveAttribute('href',"Resume.pdf");
})