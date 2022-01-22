import React from 'react';
import '../styles/signUpSreenStyle.css';

function SignUpScreen() {



    return (
       <div className="SignUpScreen">
            <h1
                className="purple"
                // style={{
                //     color: 'green'
                // }}
            >Sign In</h1>
            <form>
                <input 
                    type="email"
                    placeholder="Email"
                />
                <input 
                    type="password"
                    placeholder="Password"
                />
                <button
                    type="submit"
                >
                    Sign In
                </button>
            </form>
            <h5
                style={{
                    color: 'grey'
                }}
            >
                New to Netflix?
                <span
                    className="linkToSignUp"
                    style={{
                        color: 'white'
                    }}
                > Sign up now.</span>
            </h5>
        </div>
    )
       
}

export default SignUpScreen;
