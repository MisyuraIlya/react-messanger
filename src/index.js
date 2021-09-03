import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
    apiKey: "AIzaSyASvImdn2mLJJqlnvU3EKqugxywIH3ljls",
    authDomain: "react-messanger-c5968.firebaseapp.com",
    projectId: "react-messanger-c5968",
    storageBucket: "react-messanger-c5968.appspot.com",
    messagingSenderId: "651817356409",
    appId: "1:651817356409:web:8c01314b35128125fe18a8",
    measurementId: "G-9RFGM0QDST"
    }
);

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()


ReactDOM.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);

