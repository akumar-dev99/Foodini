import * as React from 'react';
import firebase from './firebaseConfig';
import axios from 'axios';

var auth = firebase.auth(); // access to auth tools

export const userContext = React.createContext({
    user: null,
});

export const useSession = () => {
  const { user } = React.useContext(userContext);
  return user;
}

export const useAuth = () => {
    const [state, setState] = React.useState(() => { 
        const user = firebase.auth().currentUser;
        return { initializing: !user, user, } 
    })
    function onChange(user) {
        setState({ initializing: false, user });
    }
    React.useEffect(() => {
        // listen for auth changes
        const unsubscribe = firebase.auth().onAuthStateChanged(onChange);
        // unsubscribe to the listener when unmounting
        return () => unsubscribe();
    }, []);
    return state;
}

export function loginWithPassword(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
}

export function logout() {
    auth.signOut().then(() => console.log("User Signed out"))
    .catch(() => console.log(error.message));
}

export function createAccountWithPasswordAdmin(email, password) {
    return axios({
        method: "POST",
        url: "https://us-central1-foodini-app-177fc.cloudfunctions.net/addUser",
        data: JSON.stringify({ email: email, password: password }),
        headers: {
          'Content-Type': 'application/json',
        },
    })
}

export function checkEmailExists(email) {
    return auth.fetchSignInMethodsForEmail(email);
}

