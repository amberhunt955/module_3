// * We will use a src/utilities/users-service.js module to organize functions used to sign-up, log in, log out, etc.

//* SignUpForm.jsx <---> users-service.js <---> users-api.js <--Internet--> server.js (Express)

//* handleSubmit <---> [signUp]-users-service <--> [signUp]-users-api <--Internet--> server.js (Express)

import * as usersApi from "./users-api";

//* Get Token
export function getToken() {
    const token = localStorage.getItem('token');
    // if there is no token
    if(!token) return null;

    const payload = JSON.parse(atob(token.split('.')[1]));
    console.log(payload);

    // if token is expired
    if (payload.exp < Date.now() / 1000) {
        localStorage.removeItem('token');
        return null;
    }

    // token is valid
    return token;
}

//* Get User
export function getUser() {
    const token = getToken();

    return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

//* Sign up
export async function signUp(userData) {
    // Delegate the network request code to the users-api.js API module which will ultimately return a JSON Web Token (JWT)
    // console.log('[From signUp function]', userData);
    const token = await usersApi.signUp(userData);
    // saves token to localStorage
    localStorage.setItem('token', token)
    
    return getUser();
}

//* Log out
export function logOut() {
    localStorage.removeItem('token')
}

//& Log in (my code)
export async function login() {

}