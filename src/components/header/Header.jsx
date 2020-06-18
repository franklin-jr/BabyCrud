import React from 'react'
import {Container, ButtonRound, ContainerBtn} from './Style'
import { Image, Popup } from 'semantic-ui-react'
import { FaSignOutAlt, FaUserPlus, FaListUl } from 'react-icons/fa';
import { Link } from 'react-router-dom'

import Logo from '../../assets/logo_login_p.png';

const stylePopup = {
    borderRadius: 20,
    opacity: 0.7,
    padding: 10,
  }

function Header () {
    return (
        <Container>

        <Popup
          trigger={
           
            <ButtonRound color='tranparent' size='40'>
                <FaSignOutAlt color='#5188e2' size='20'/>
            </ButtonRound>
           
          }
          content='Sair'
          position='right center'
          style={stylePopup}
          inverted
        />
           
           
         
                    
            <Image src={Logo} size='small' />


            <ContainerBtn>


                <Popup
                trigger={
                    <Link to="caduser">
                        <ButtonRound color='#5188e2' size='40' pr='10'>
                            <FaUserPlus color='white' size='20'/>
                        </ButtonRound>
                    </Link>
                }
                content='Add Usuário'
                position='bottom center'
                style={stylePopup}
                inverted
                />

                <Popup
                trigger={
                    <Link to="/">
                        <ButtonRound color='#5188e2' size='40'>
                            <FaListUl color='white' size='20'/>
                        </ButtonRound>
                    </Link>
                }
                content='Listar usuários'
                position='bottom center'
                style={stylePopup}
                inverted
                />
     

            </ContainerBtn>

           
        </Container>
    )
}

export default Header