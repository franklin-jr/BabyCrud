import React, { useState } from 'react'
import './Login.css'
import {Container, Card } from './Style'
import LogoImg from '../../assets/logo_login.png'
import { useDispatch, useSelector } from 'react-redux'

import { userActions } from '../../store/actions'

import { Button, Form, Icon } from 'semantic-ui-react'


function Login() {

    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    })

    const [validateEmail, setValidateEmail] = useState(false);
    const [validatePassword, setValidatePassword] = useState(false);

    //const loggingIn = useSelector(state => state.auth.loggingIn);

    const loading = useSelector(state => state.shared.loading);
    const dispatch = useDispatch();


    function handleChange(e) {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
        //setInputs(inputs => ({ ...inputs, [name]: value }));
    }


    function handleSubmit(e) {
        e.preventDefault();
        if (inputs.email && inputs.password) {
            dispatch(userActions.login(inputs.email, inputs.password));
        }
    }

    function validEmail() {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if(re.test(String(inputs.email).toLowerCase())) {
            setValidateEmail(false)
        } else {
            setValidateEmail(true)
        }
    
    }

    function validPassword(){
        if(inputs.password.length < 6){
            setValidatePassword(true)
        } else {
            setValidatePassword(false)
        }
            
    }

    function errorEmail () {
        if(!inputs.email && validateEmail)
            return 'Preencha o campo e-mail'
        else if(validateEmail)
            return 'E-mail inválido'
        else
            return null
    }
    
    function errorPassword () {
        if(!inputs.password && validatePassword)
            return 'Preencha o campo senha'
        else if(validatePassword)
            return 'Minimo de 6 caracteres'
        else
            return null
    }



    return (
    <Container>
        <Card>
            <img className='logo' src={LogoImg} alt="" width="170"/>
            <Form className='formCard' onSubmit={handleSubmit}>
            
                    <Form.Input 
                        fluid
                        style={{width: "250px"}}
                        iconPosition='left' 
                        placeholder='Email'
                        error={ errorEmail()}        
                        
                    >
                        <Icon name='mail' />
                        <input name='email' onBlur={() => {validEmail()}} value={inputs.email}  onChange={handleChange}/>
                    </Form.Input>
                    
             
               
                    <Form.Input
                        fluid
                        style={{width: "250px"}}
                        iconPosition='left'  
                        placeholder='Senha'
                        error={errorPassword()}    
                    >
                        <Icon name='lock' />
                        <input type='password' name='password' onKeyUp={() => {validPassword()}} value={inputs.password} onChange={handleChange}/>
                    </Form.Input>

                
                <Button 
                    loading={loading}
                    color={!inputs.email || !inputs.password || validateEmail || validatePassword ? 'grey' : 'primary'}
                    type='submit'
                    disabled={!inputs.email || !inputs.password || validateEmail || validatePassword || loading}
                >Entrar</Button>


             
                
            </Form>
            

        </Card>
    </Container>

    );
}

export default Login;