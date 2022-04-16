import { render, screen } from '@testing-library/react';
import App from './App';

import React from 'react';
import ReactDOM from 'react-dom';
import Register from "./pages/register";

//default from React
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


//unit test1: register page - passed
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Register />, div);
});