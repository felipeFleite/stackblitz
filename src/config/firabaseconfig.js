// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZz0NSN-uQ4gx1cv2nq0UrvXIYOZsqfjk",
  authDomain: "react-login-d9af4.firebaseapp.com",
  projectId: "react-login-d9af4",
  storageBucket: "react-login-d9af4.firebasestorage.app",
  messagingSenderId: "631825046547",
  appId: "1:631825046547:web:007248363ffffde161b3e6",
  measurementId: "G-W79SLYX9T8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }