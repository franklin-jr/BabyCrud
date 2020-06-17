import { userService } from '../../services'
import { history } from '../../routes/history'
import {alertActions} from './alert_actions'



export const userActions = {
    login,
    getUsers,
    deleteUser
};
function loading(loading) { return { type: 'LOADING_STATUS', loading } }
function login(email, password) {
    return dispatch => {
        dispatch(loading(true));
        
        userService.getUsers().then(response => {
            if(response.ok){
                dispatch(loading(false));
                return response.json()
            } else {
                dispatch(loading(false));
                console.log('Erro')
            }
        }).then(json => {
            var user = json.filter( item=> {
                return item.email === email && item.password === password
            });
            if(user && user.length > 0){
                dispatch(success(json[0]))
                history.push('/')
            } else {
                dispatch(alertActions.error('Login não autorizado!'));
            }
            
        }) 
    };

    
    function success(user) { return { type: 'LOGIN_SUCCESS', user } }

}


function getUsers() {
    return dispatch => {
        dispatch(loading(true));
        userService.getUsers().then(response => {
            if(response.ok){
                dispatch(loading(false));
                return response.json()
            } else {
                console.log('Erro')
                dispatch(loading(false));
            }
        }).then(json => {
           dispatch(success(json))
            
        }) 
    };

    function success(users) { return { type: 'USERS_SUCCESS', users } }

}

function deleteUser(id) {
    return dispatch => {
        dispatch(loading(true));
        userService.deleteUser(id).then(response => {
            if(response.ok){
                dispatch(getUsers())
                setTimeout(() => {
                    dispatch(alertActions.success('Usuário excluido com sucesso!'));
                }, 2000);
            } else {
                console.log('Erro')
            }
        })
    };

}