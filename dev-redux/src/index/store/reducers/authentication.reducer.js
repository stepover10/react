const initialState = {
  message: "SESSEION",
  loggingIn: false, 
  user: {}
};

export function authentication(state=initialState, action) { 
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      console.log('LOGIN_SUCCESS-store', action)  
      return {
        ...state,
        loggingIn: true,
        user: action.user
      };

    case 'LOGIN_FAILE':
      return {};

    case 'LOGOUT':
      console.log('LOGIN_SUCCESS-out', state)  
      return {
        ...initialState
      };

    default:
      return state
  }
}