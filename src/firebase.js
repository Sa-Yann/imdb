// import { firebase } from "@firebase/app";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// require("firebase/auth");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtD1bG9Du2-WjCHXkVTf4NCrWrapMMgqQ",
  authDomain: "netflix-clone122k21.firebaseapp.com",
  projectId: "netflix-clone122k21",
  storageBucket: "netflix-clone122k21.appspot.com",
  messagingSenderId: "616292455948",
  appId: "1:616292455948:web:31b6024f33c73e5c710029"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const db = app.firestore()

export const auth = getAuth(app)

// you can only have one default export per file here firebase.js
// export default db

// you can have many explicit export per file
// export  { auth }