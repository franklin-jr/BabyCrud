

const initialState = {};

export function auth(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        isAuth: true,
        loggedIn: true,
        user: action.user
      };
    case 'LOGOUT':
      return {};
    default:
      return state
  }
}