import React from 'react';
import {render, screen} from '@testing-library/react';
import Home from '../Home';
import '@testing-library/jest-dom/extend-expect';

/**
 * Test Home Page
 */
test('Check if the header on the Home page renders', () => {
  render(<Home />);
  const headerElement = screen.getByTestId('header');
  expect(headerElement.textContent).toBe('Hi. I\'m Kevin.');
});
