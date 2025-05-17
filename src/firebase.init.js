// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpMURckC5JhysDTIi6_RVoBXm96L-fDwA",
  authDomain: "coffee-store-02-6584e.firebaseapp.com",
  projectId: "coffee-store-02-6584e",
  storageBucket: "coffee-store-02-6584e.firebasestorage.app",
  messagingSenderId: "883135980699",
  appId: "1:883135980699:web:efd02329ff825f92e4d23e"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);  