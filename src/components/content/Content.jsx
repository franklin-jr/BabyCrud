import React from 'react'
import {Container } from './Style'
import { Route, Switch, Router } from 'react-router'
import  ListUser from '../listUser/List'
import  CadUser from '../cadUser/CadUser'
import { history } from '../../routes/history'



function Content () {
    return (
      
            <Container>
                <div>Teste
                
                    <Switch>
                        <Route path="user" component={ListUser}/>
                        <Route  path="caduser" component={CadUser}/>
                    </Switch>
               
                </div>
              
               
            </Container>
     
    )
}

export default Content

