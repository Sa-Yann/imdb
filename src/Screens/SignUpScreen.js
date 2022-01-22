import React, {useRef, useState} from 'react';
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import '../styles/signUpSreenStyle.css';

function SignUpScreen() {

    

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("")
    

    // useRef = > we need to point to speccific html elements
    // const emailRef = useRef(null);
    // const passwordRef = useRef(null);

    const register = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            console.log("file: SignUpScreen.js ~ line 21 ~ register ~ userCredential", userCredential);
        } catch (error) {
            console.log(error.message);
        }
    };

    // prevemting sign in button to refresh the entire homescreen page once clicked
    // const signIn = (e) => {
    //     e.preventDefault();

    //     auth(
    //         emailRef.current.value,
    //         passwordRef.current.value
    //         )
    //         .then((authUser) => {
    //             console.log(authUser)
    //         })
    //         .catch((error) => {
    //             alert(error.message)
    //         });
    // };

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
                    // ref ={emailRef} 
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setRegisterEmail(e.target.value)}
                />
                <input 
                    // ref={passwordRef}
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setRegisterPassword(e.target.value)}
                />
                <button
                    type="submit"
                    // onClick={signIn}
                    onClick={register}
                    
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
                    // onClick={register}
                > Sign up now.</span>
            </h5>
        </div>
    )
       
}

export default SignUpScreen;



// const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });
