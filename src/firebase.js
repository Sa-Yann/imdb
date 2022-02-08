
// Firebase version 8
import firebase from 'firebase/app';
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/database';    // for realtime database
import 'firebase/firestore';   // for cloud firestore
import 'firebase/messaging';   // for cloud messaging
import 'firebase/functions';   // for cloud functions

const firebaseConfig = {
  apiKey: "AIzaSyAtD1bG9Du2-WjCHXkVTf4NCrWrapMMgqQ",
  authDomain: "netflix-clone122k21.firebaseapp.com",
  projectId: "netflix-clone122k21",
  storageBucket: "netflix-clone122k21.appspot.com",
  messagingSenderId: "616292455948",
  appId: "1:616292455948:web:31b6024f33c73e5c710029"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { auth };
export default db;
// // Firebase version 9
// // import { firebase } from "@firebase/app";
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore"

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAtD1bG9Du2-WjCHXkVTf4NCrWrapMMgqQ",
//   authDomain: "netflix-clone122k21.firebaseapp.com",
//   projectId: "netflix-clone122k21",
//   storageBucket: "netflix-clone122k21.appspot.com",
//   messagingSenderId: "616292455948",
//   appId: "1:616292455948:web:31b6024f33c73e5c710029"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // you can have many explicit export per file
// export const auth = getAuth(app)
// // linkikng the app to Firestore
// export default getFirestore()




