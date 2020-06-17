import React from 'react'
import {Container } from './Style'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import  ListUser from '../listUser/List'
import  CadUser from '../cadUser/CadUser'
import { history } from '../../routes/history'



function Content (props) {
    return (
      
            <Container>
                {props.children}       
            </Container>
     
    )
}

export default Content

