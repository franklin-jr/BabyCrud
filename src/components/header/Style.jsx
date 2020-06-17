import styled from 'styled-components'


export const Container = styled.header`
    background-color: white;
    justify-content: space-between;
    display: flex;
    overflow: hidden;
    align-items: center;
    padding: 0 10px;
    position: fixed;
    width: 100%;
    
    
`;

export const ButtonRound = styled.div`
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
        background-color: rgba(21, 94, 214, 0.3);
        cursor: pointer;
    }
`;

export const ContainerBtn = styled.div`
    justify-content: space-between;
    display: flex;
    align-items: center;
    padding: 0 10px;
`;




export const Text = styled.text`
    color: ${props => `${props.color}`};
`;


