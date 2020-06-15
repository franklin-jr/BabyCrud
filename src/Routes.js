import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './pages/login/Login'
import Home from './pages/home/Home'



const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <Login/>
            </Route>
            <Route exact path="/home">
                <Home/>
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;