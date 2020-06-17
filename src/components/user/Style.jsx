import styled from 'styled-components'


export const Container = styled.div`
    background-color: white;
    border-radius: 35px;
    height:70px;
    width: 100%;
    justify-content: space-between;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 10px;
    margin-bottom: 20px;
    
`;

export const ContainerPerfil = styled.div`
    background-color: white;
    border-radius: 35px;
    height:70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 10px;
`;

export const ButtonRound = styled.button`
    background-color: ${props => `${props.color}`};
    display: flex;
    justify-content: center;
    margin-right: ${props => `${props.pr}px`};
    height: ${props => `${props.size}px`};
    width: ${props => `${props.size}px`};
    padding: 10px;
    border: 0;
    border-radius: 50px;
    &:hover {
        opacity: 0.3;
        cursor: pointer;
    }
    &:focus {
        border: none;
        outline: none;
    }
`;

export const ContainerBlock = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 10px;
`;

export const ContainerRow = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0 10px;
`;




export const Title = styled.text`
    color: ${props => `${props.color}`};
    font-size: 20px;
    font-weight: bold;
`;



export const ImgPerfil = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-image: url('https://images.emojiterra.com/mozilla/512px/1f476.png');
    background-size: cover;

`;

