const initialState = {loading: false};


export function shared(state = initialState, action) {

  switch (action.type) {
    case 'LOADING_STATUS':
      return {
        loading: action.loading
      }
    default:
      return state
  }
}



