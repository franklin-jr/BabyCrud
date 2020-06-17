import React from 'react'
import {Router, Route, Switch, Redirect } from 'react-router'
import Login from '../pages/login/Login'
import Home from '../pages/home/Home'
import { history } from './history';
import { PrivateRoute } from './privates'
import { useSelector } from 'react-redux';
import CadUser from '../components/cadUser/CadUser'
import ListUser from '../components/listUser/List'




function Routes () {
    const isAuth = useSelector(state => state.auth.isAuth);
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/login" component={Login}/>
                    <Home>
                        <PrivateRoute isAuth={isAuth} component={({ match }) =>
                            <div>
                                <Route exact path='/list' component={ListUser} />
                                <Route exact path='/caduser' component={CadUser} /> 
                            </div>
                        }/>
                    </Home>
                    <Redirect from="*" to="/login" />
            </Switch>
        </Router>
    )
}

    


export default Routes;