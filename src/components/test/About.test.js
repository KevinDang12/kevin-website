import React from 'react';
import {Context as ResponsiveContext} from 'react-responsive';
import {render, screen} from '@testing-library/react';
import About from '../About';
import '@testing-library/jest-dom/extend-expect';

/**
 * Test About Page on Desktop
 */
test('Check the About page renders on Desktop', () => {
  render(
      <ResponsiveContext.Provider value={{width: 769}}>
        <About />
      </ResponsiveContext.Provider>,
  );
  const headerElement = screen.getByTestId('aboutHeader');
  expect(headerElement.textContent).toBe('A Brief Summary about Me');
});

/**
 * Test About Page on Mobile
 */
test('Check the About page renders on Mobile', () => {
  render(
      <ResponsiveContext.Provider value={{width: 768}}>
        <About />
      </ResponsiveContext.Provider>,
  );
  const headerElement = screen.getByTestId('aboutHeaderMobile');
  expect(headerElement.textContent).toBe('A Brief Summary about Me');
});
