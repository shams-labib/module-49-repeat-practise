// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6w1iPuQ5PfOSQfQ4YAav6LuKQxFUEXXU",
  authDomain: "module-49-repeat-practise.firebaseapp.com",
  projectId: "module-49-repeat-practise",
  storageBucket: "module-49-repeat-practise.firebasestorage.app",
  messagingSenderId: "538262538565",
  appId: "1:538262538565:web:78168d9d194ea42a0fd62c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)