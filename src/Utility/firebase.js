// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
//auth
import {getAuth} from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPM_isbPNaD6hMBdbp1gzAB3qzvi7v03k",
  authDomain: "clone-60794.firebaseapp.com",
  projectId: "clone-60794",
  storageBucket: "clone-60794.appspot.com",
  messagingSenderId: "575707806292",
  appId: "1:575707806292:web:2e5a9eed46fccfe0d38bc1",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);//it's give us everything from auth
export const db = app.firestore();//db(data base)






/**
1. on firebase "Authentication"--> get start--> choose sign-in method --> only"Email/password-->Enable"-->save-->
**/
