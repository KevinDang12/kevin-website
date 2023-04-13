import React from 'react';
import Work from '../Work';
import {Context as ResponsiveContext} from 'react-responsive';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

/**
 * Test Work Page on Desktop
 */
test('Check the Work page renders on Desktop', () => {
  render(
      <ResponsiveContext.Provider value={{width: 769}}>
        <Work />
      </ResponsiveContext.Provider>,
  );
  const headerElement = screen.getByTestId('workHeader');
  expect(headerElement.textContent).toBe('Work Experience');
});

/**
 * Test Work Page on Mobile
 */
test('Check the Work page renders on Mobile', () => {
  render(
      <ResponsiveContext.Provider value={{width: 768}}>
        <Work />
      </ResponsiveContext.Provider>,
  );
  const headerElement = screen.getByTestId('workHeaderMobile');
  expect(headerElement.textContent).toBe('Work Experience');
});
