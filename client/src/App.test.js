import { render, screen } from '@testing-library/react';
import App from './App';

import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import Register from "./pages/register";
import {act} from "react-dom/test-utils";

//default from React
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

//unit test1: home page - passed
it('renders without crashing', () => {
  act(() => {
    const container = document.createElement('app');
    const root = createRoot(container);
    root.render(<App tab="home" />);
  })
});


//unit test2: register page - passed
it('renders without crashing', () => {
  act(() => {
    const container = document.createElement('app');
    const root = createRoot(container);
    root.render(<Register tab="register" />);
  })
});