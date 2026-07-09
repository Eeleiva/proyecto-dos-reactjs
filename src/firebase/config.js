 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2HyW3hYk9r8Vh7QSl5WPpGoO8OZQJJhU",
  authDomain: "proyecto-dos-c26122.firebaseapp.com",
  projectId: "proyecto-dos-c26122",
  storageBucket: "proyecto-dos-c26122.firebasestorage.app",
  messagingSenderId: "964356095320",
  appId: "1:964356095320:web:9f7e6f1024e90ec40c392d"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };