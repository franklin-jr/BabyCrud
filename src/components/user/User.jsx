import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { userActions } from '../../store/actions'
import {Container, ContainerBlock, ContainerRow, ImgPerfil, ContainerPerfil, Title, ButtonRound} from './Style'
import { FaHighlighter, FaTrash } from 'react-icons/fa';
import './User.css'


function User(props) {

    const dispatch = useDispatch();
    function deleteUser(id) {
        dispatch(userActions.deleteUser(id))
    }
    return (
      <Container className='fadeIn'>
          <ContainerPerfil>
            <ImgPerfil/>
                <ContainerBlock>
                    
                    <Title color='#5188e2'>{props.user.nome}</Title>
                    <div> {props.user.email}</div>
                    <div> {props.user.id}</div>
                
            
                </ContainerBlock>
            </ContainerPerfil> 
            <ContainerRow>
                <ButtonRound color='#5188e2' size='35' pr='10'>
                    <FaHighlighter color='white' size='15'/>
                </ButtonRound> 
                <ButtonRound onClick={() => {deleteUser(props.user.id)}} color='red' size='35' pr='10'>
                    <FaTrash color='white' size='15'/>
                </ButtonRound>
            </ContainerRow>     
      </Container>
       
    )
}

export default User