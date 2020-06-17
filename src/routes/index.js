import React from 'react'
import {Router, Route, Switch, Redirect } from 'react-router'
import Login from '../pages/login/Login'
import Home from '../pages/home/Home'
import { history } from './history';
import { PrivateRoute } from './privates'
import { useSelector } from 'react-redux';
import CadUser from '../components/cadUser/CadUser'
import ListUser from '../components/listUser/List'
import Header2 from '../components/header/Header'






function Routes () {
    const isAuth = useSelector(state => state.auth.isAuth);
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/" component={Home}/>

                {/*  <PrivateRoute exact path="/" component={Home} isAuth={isAuth} />  */}
                <Redirect from="*" to="/login" />
            </Switch>
        </Router>
    )
}

    


export default Routes;