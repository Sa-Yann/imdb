import React from 'react';
import './App.css';
import { BrowserRouter , Switch, Route } from "react-router-dom";
import Homescreen from './Screens/Homescreen';
import LoginScreen from './Screens/LoginScreen';

function App() {
  const user = true;
  return (
    <div className="App">
      {/* <h1>App Component</h1> */}
      <BrowserRouter>
        {
          user ? (
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
