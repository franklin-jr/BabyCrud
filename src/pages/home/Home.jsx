import React from 'react'
import {Container} from './Style'
import Header  from '../../components/header/Header'
import Content from '../../components/content/Content'
import {BrowserRouter, Route, Switch} from 'react-router-dom'






function Home() {
    return (

        <Container>
            <BrowserRouter>
                <Header/>
                <Content/>
            </BrowserRouter>         
        </Container>
           
    )
}

export default Home