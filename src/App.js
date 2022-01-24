import React, { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth"
import './App.css';
import { BrowserRouter , Switch, Route } from "react-router-dom";
import Homescreen from './Screens/Homescreen';
import LoginScreen from './Screens/LoginScreen';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';


function App() {
  // const user = false;
  const user = useSelector(selectUser);

  const dispacth = useDispatch();

  // everytime the page refesh onAuthStateChanged in useEffect allows to check 
  // if the user is loged in or not by checking the db if user exist
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (userInfo) => {
      if(userInfo) {
        console.log("file: App.js ~ line 18 ~ unsubscribe ~ userInfo", userInfo)
        //Login
        // dispatching action into the user slice of the redux store
        dispacth(login({
          uid: userInfo.uid,
          email: userInfo.email
        }))
      } else {
        //User is signed out
        dispacth(logout)
      }
    })

    return unsubscribe 
  },[]) 

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
          </Switch>
          )
        }
        
      </BrowserRouter>
    </div>
  );
}

export default App;
