import styled from 'styled-components'
import backgroundImg from '../../assets/fundo_login.png';




export const Container = styled.div`
    background-image: url(${backgroundImg});
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    background-size: cover;
`

export const Card = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 400px;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    
`


