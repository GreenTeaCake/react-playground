import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';

test('renders app component', () => {
  render(<App />);
  const appElement = screen.getAllByTestId('app');
  expect(appElement[0]).toBeInTheDocument();
});
