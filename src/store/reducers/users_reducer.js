const initialState = {usuarios: []};

export function users(state = initialState, action) {
  switch (action.type) {
    case 'USERS_SUCCESS':
      return {
        usuarios: action.users
      };
    default:
      return state
  }
}