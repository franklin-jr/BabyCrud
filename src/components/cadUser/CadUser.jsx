import React, { useState } from 'react'
import {Form, Button} from 'semantic-ui-react'
import { useDispatch} from 'react-redux'
import { userActions } from '../../store/actions/user_actions'
import {Container} from './Style'



function ListUser() {

  const dispatch = useDispatch();


  const [dadosUser, setDadosUser] = useState({
    nome: '',
    cpf: '',
    email: ''
  })

  const [endereco, setEndereco] = useState({
    cep: '',
    rua: '',
    bairro: '',
    cidade: '',
    numero: ''
  })

  
  function handleChange(e) {
    const { name, value } = e.target;
    setDadosUser({ ...dadosUser, [name]: value });
    //setInputs(inputs => ({ ...inputs, [name]: value }));
  }

  function handleChangeEnd(e) {
    const { name, value } = e.target;
    setEndereco({ ...endereco, [name]: value });
    //setInputs(inputs => ({ ...inputs, [name]: value }));
  }


  function handleSubmit(e) {
    e.preventDefault();
    dispatch(userActions.insertUser({...dadosUser, endereco, password: "102030"}));
    
  }





 function getInfoCep () {
    if(endereco.cep != null && endereco.cep.length === 8)
    fetch(`https://viacep.com.br/ws/${endereco.cep}/json/`, {
      method: 'GET',
      cache: 'default'
    }).then(response => {
        return response.json()
        }).then(json => {
          console.log(json)
            setEndereco({
              rua: json.logradouro,
              bairro: json.bairro,
              cidade: json.localidade
            })
     
            
        })
  }

  function validaCampo(campo){
      if(!campo)
        return 'Campo obrigatório'
  }

  
    return (
         <Container>
                <Form onSubmit={handleSubmit}>
                  <Form.Group>
                    <Form.Input name='nome' 
                      value={dadosUser.nome}  
                      onChange={handleChange} 
                      className='mt-4 ' 
                      label='Nome' 
                      placeholder='Nome' 
                      width={7}
                      error={!dadosUser.nome ? 'Preencha este campo': null}
                    />
                    <Form.Input name='email' value={dadosUser.emial}  onChange={handleChange} className='mt-4' label='E-mail' placeholder='E-mail' width={6}/>
                    <Form.Input name='cpf'  value={dadosUser.cpf}  onChange={handleChange} className='mt-4' label='Cpf' placeholder='Cpf' width={4}/>
                  </Form.Group>
                  <Form.Group>
                    <Form.Input   className='mt-4' label='Cep' placeholder='Cep' width={4}>
                      <input name='cep' onKeyUp={() => getInfoCep()} value={endereco.cep}  onChange={handleChangeEnd}/>
                    </Form.Input>
                    <Form.Input  className='mt-4' label='Rua' placeholder='Rua' width={10} >
                      <input name='rua' value={endereco.rua}  onChange={handleChangeEnd}/>
                    </Form.Input>
                    <Form.Input className='mt-4' label='Numero' placeholder='Nº' width={2} />
                  </Form.Group>
                  <Form.Group>
                    <Form.Input className='mt-4' label='Bairro'  placeholder='Bairro' width={8}>
                      <input name='bairro' value={endereco.bairro}  onChange={handleChangeEnd}/>
                    </Form.Input>
                    <Form.Input className='mt-4' label='Cidade'  placeholder='Cidade' width={8}>
                      <input name='cidade' value={endereco.cidade}  onChange={handleChangeEnd}/>
                    </Form.Input>
                  
                  </Form.Group >
                  <Button className='mt-4 primary' type='submit'>Submit</Button>
                </Form>
          </Container>
           
             
          
    
       
    )
}

export default ListUser