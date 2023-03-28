import React from "react";
import { Context as ResponsiveContext } from 'react-responsive';
import { render, screen } from '@testing-library/react';
import Projects from "../Projects";
import "@testing-library/jest-dom/extend-expect";

/**
 * Check that the titles and the links are on the Project Page
 */
function projectTitleAndLinks() {
    const minesweeperTitle = screen.getByTestId("minesweeper");
    const notepadTitle = screen.getByTestId("notepad");
    const minesweeperLink = screen.getByTestId("minesweeperlink");

    expect(minesweeperTitle.textContent).toBe("Project #1: Minesweeper");
    expect(notepadTitle.textContent).toBe("Project #2: Notepad");
    expect(minesweeperLink).toHaveAttribute('href',"http://www.kevindang12.com/minesweeper");
}

/**
 * Test Project Page on Desktop
 */
test("Check that the Project Carousel renders the elements correctly on Desktop", () => {
    render(
        <ResponsiveContext.Provider value={{ width: 769 }}>
            <Projects />
        </ResponsiveContext.Provider>
    )

    projectTitleAndLinks()
})

/**
 * Test Project Page on Mobile
 */
test("Check that the Project Carousel renders the elements correctly on Mobile", () => {
    render(
        <ResponsiveContext.Provider value={{ width: 768 }}>
            <Projects />
        </ResponsiveContext.Provider>
    )

    projectTitleAndLinks()
})
