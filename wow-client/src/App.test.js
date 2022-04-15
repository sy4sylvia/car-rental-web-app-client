import { render, screen } from '@testing-library/react';
import App from './App';

import React from 'react';
import ReactDOM from 'react-dom';
import Register from "./components/register";

//unit test1: register page - passed
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Register />, div);
});