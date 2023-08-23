// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkd2OWUaxrOj3iqvD-HcRAAQ3QkBid3U0",
  authDomain: "receitas-885bc.firebaseapp.com",
  projectId: "receitas-885bc",
  storageBucket: "receitas-885bc.appspot.com",
  messagingSenderId: "74160757384",
  appId: "1:74160757384:web:33fc6572f04753df5c9d3d",
  measurementId: "G-HWH3Z332RV"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };