export const userActions = {
  login, 
  logout
};

export function login(params) {
  return dispatch => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        console.log("dispatch-user-login")
        dispatch({
          type : "LOGIN_SUCCESS", 
          loggingIn: true,
          user : {
            name: '유찬현',
            role: 'SUPER_ADMIN'
          }
        })  

      })   
  };
}

export function logout(params) {
  return {
    type : "LOGOUT", 
    loggingIn: false,
    user : {}
  }
}





