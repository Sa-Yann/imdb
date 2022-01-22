import React, { useState } from 'react';
import '../styles/loginSreenStyle.css';
import SignUpScreen from './SignUpScreen';

function LoginScreen() {

const [signIn, setSignIn] = useState(false)

    return (

       <div className="loginScreen">
            {/* <h1>I AM THE LOGIN SCREEN</h1> */}
            <div className="logScrnn_BckGrnd">
                <img
                    className="lgnScreen__Logo"
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt="logo_Netflix"
                />
            <button 
                className="lgnScreen__Btn"
                onClick={() => setSignIn(true)}
            >
                Sign In
            </button>
            <div className="lgnScreen__Gradient" />
            </div>
            <div className="lgnScreen__Content">
                {
                    signIn ? (
                        <SignUpScreen />
                    ) : (
                        <>
                            <h1>Unlimited films, TV Programmes and more...</h1>
                            <h2>Watch anywhere. Cancet at any time.</h2>
                            <h3>Ready to watch? Enter your email to create or restart your membership</h3>
                            <div className="lgnScreen__Input">
                               <form>
                                   <input
                                   type="email"
                                   placeholder="Email Adress"
                                   />
                                   <button 
                                       className="lgnScreen__getStartedBtn"
                                       OnClick={() => setSignIn(true)} 
                                   >
                                       GET STARTED
                                   </button>
                               </form>
                            </div>
                        </>
                    )
                }
                
            </div>
        </div>
    )
       
}

export default LoginScreen;
