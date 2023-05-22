// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore}from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getFunctions } from "firebase/functions"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHsZm1UopCoEIIFty7yPudFXVD0mFV-lk",
  authDomain: "portfolio-akiyama.firebaseapp.com",
  projectId: "portfolio-akiyama",
  storageBucket: "portfolio-akiyama.appspot.com",
  messagingSenderId: "928009438266",
  appId: "1:928009438266:web:4fb54aa9ca993020a86103"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const auth = getAuth(app)//自分のfirebaseであることを示している

const functions = getFunctions(app);
export {firestore,auth,functions};