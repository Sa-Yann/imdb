import React, { useEffect } from 'react';
// import { onSnapshot, collection } from '@firebase/firestore';
// import { getAuth, onAuthStateChanged } from "firebase/auth"
// import db from "./firebase";
import { auth } from './firebase';
import './App.css';
import { BrowserRouter , Switch, Route } from "react-router-dom";
import Homescreen from './Screens/Homescreen';
import LoginScreen from './Screens/LoginScreen';
import ProfileScren from './Screens/ProfileScren';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { eraseProductInfo } from './features/productSlice'

function App() {
  // const user = false;
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  // everytime the page refesh onAuthStateChanged in useEffect allows to check 
  // if the user is loged in or not by checking the db if user exist
  useEffect(() => {

    

    // db.collection('products')
    // .where('active', '==', true)
    // .get()
    // .then(function (querySnapshot) {
    //   querySnapshot.forEach(async function (doc) {
    //     console.log(doc.id, ' => ', doc.data());
    //     const priceSnap = await doc.ref.collection('prices').get();
    //     priceSnap.docs.forEach((doc) => {
    //       console.log(doc.id, ' => ', doc.data());
    //     });
    //   });
    // });
  
    
    // setting a listener (onAuthStateChanged) to check if user is login or not
    const unsubscribe = auth.onAuthStateChanged((userInfo) => {
      if(userInfo) {
        // console.log("file: App.js ~ line 18 ~ unsubscribe ~ userInfo", userInfo)
        //Login
        // dispatching the state paylaod  into the login action in the redux userSlice
        // the payload is the userInfo.uid/email taht we get from the onAuthStateChanged listenner
        dispatch(login({
          uid: userInfo.uid,
          email: userInfo.email
        }))
      } else {
        //if User is signed out we push the logout action 
        dispatch(logout());
        dispatch(eraseProductInfo());
      }
    })

    return unsubscribe 

  },[dispatch]) 

  return (
    <div className="App">
      {/* <h1>App Component</h1> */}
      <BrowserRouter>
        {
          !user ? (
            <LoginScreen />
          ) :
          (
            <Switch>
              {/* <Route path="/test">
                <h1
                  style={{
                    color: 'white'
                  }}
                >TEST ROUTING</h1>
              </Route> */}
              <Route path="/" exact >
                <Homescreen />
              </Route> 
              <Route path="/profil">
                <ProfileScren />
              </Route>
          </Switch>
          )
        } 
      </BrowserRouter>
    </div>
  );
}

export default App;
