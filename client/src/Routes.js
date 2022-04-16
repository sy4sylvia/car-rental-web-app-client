import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import App from './App'
import Login from './routes/Login';
import Register from './routes/Register';
import Test from "./routes/Test";

const Routes = () => (
    <BrowserRouter>
        <Route exact path="/" component={App} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/test" component={Test} />
    </BrowserRouter>
);

export default Routes;
