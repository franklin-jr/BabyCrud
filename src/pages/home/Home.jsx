import React from 'react'
import {Container, Content} from './Style'
import Header  from '../../components/header/Header'
import {BrowserRouter, Route, Switch} from 'react-router-dom'






function Home(props) {
    return (

        <Container>
                <Header/>
                <Content>
                    {props.children}
                </Content>     
        </Container>
           
    )
}

export default Home