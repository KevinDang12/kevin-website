import React from 'react';
import Skills from '../Skills';
import {Context as ResponsiveContext} from 'react-responsive';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

/**
 * Test Skills Page on Desktop
 */
test('Check the links on Skills page for Desktop', () => {
  render(
      <ResponsiveContext.Provider value={{width: 769}}>
        <Skills />
      </ResponsiveContext.Provider>,
  );
  const jsImage = screen.getByTestId('jsImage');
  const reactImage = screen.getByTestId('reactImage');
  const javaImage = screen.getByTestId('javaImage');
  const androidImage = screen.getByTestId('androidImage');
  const pythonImage = screen.getByTestId('pythonImage');
  const sqlImage = screen.getByTestId('sqlImage');
  const cImage = screen.getByTestId('cImage');
  const cppImage = screen.getByTestId('cppImage');

  expect(jsImage).toHaveAttribute('src', 'Javascript.png');
  expect(reactImage).toHaveAttribute('src', 'React.png');
  expect(javaImage).toHaveAttribute('src', 'Java.png');
  expect(androidImage).toHaveAttribute('src', 'Android.png');
  expect(pythonImage).toHaveAttribute('src', 'Python.png');
  expect(sqlImage).toHaveAttribute('src', 'SQL.png');
  expect(cImage).toHaveAttribute('src', 'C.png');
  expect(cppImage).toHaveAttribute('src', 'C++.png');
});

/**
 * Test Skills Page on Mobile
 */
test('Check the links on Skills page for Mobile', () => {
  render(
      <ResponsiveContext.Provider value={{width: 768}}>
        <Skills />
      </ResponsiveContext.Provider>,
  );

  const jsImage = screen.getByTestId('jsImageMobile');
  const reactImage = screen.getByTestId('reactImageMobile');
  const javaImage = screen.getByTestId('javaImageMobile');
  const androidImage = screen.getByTestId('androidImageMobile');
  const pythonImage = screen.getByTestId('pythonImageMobile');
  const sqlImage = screen.getByTestId('sqlImageMobile');
  const cImage = screen.getByTestId('cImageMobile');
  const cppImage = screen.getByTestId('cppImageMobile');

  expect(jsImage).toHaveAttribute('src', 'Javascript.png');
  expect(reactImage).toHaveAttribute('src', 'React.png');
  expect(javaImage).toHaveAttribute('src', 'Java.png');
  expect(androidImage).toHaveAttribute('src', 'Android.png');
  expect(pythonImage).toHaveAttribute('src', 'Python.png');
  expect(sqlImage).toHaveAttribute('src', 'SQL.png');
  expect(cImage).toHaveAttribute('src', 'C.png');
  expect(cppImage).toHaveAttribute('src', 'C++.png');
});
