import React, { useRef } from 'react';
// import React, { useState} from 'react';
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import '../styles/signUpSreenStyle.css';

function SignUpScreen() {

    // const [registerEmail, setRegisterEmail] = useState("");
    // const [registerPassword, setRegisterPassword] = useState("")
    
    // useRef = > we need to point to speccific html elements
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = async (e) => {
        e.preventDefault()
        try {
            // // with useState methode:
            // const userCredential = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            // with useRef methode:
            const userCredential = await createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value);
            console.log("file: SignUpScreen.js ~ line 21 ~ register ~ userCredential", userCredential);
            // const  user = userCredential.user
        } catch (error) {
            alert(error.message);
        }
    };

    // const signIn = (e) => {
    //     e.preventDefault();
    //     signInWithEmailAndPassword(auth, registerEmail, registerPassword)
    //     .then(
    //         console.log(`log from auth.currentUser on line 29: SignUpScreens.js : ${auth.currentUser}`)
    //     )
    //     .catch(
    //         (error) => {
    //             // const errorCode = error.code
    //             // const errorMessage = error.message
    //             // console.log(`Error type ${errorCode} ${errorMessage}`);
    //             console.log(error.message)
    //             alert(error.message)
    //         }
    //     ); 
    // }

    // prevemting sign in button to refresh the entire homescreen page once clicked
    const signIn = (e) => {
        // Firebase version 9
        e.preventDefault();
        
        signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
        .then((userCredential) => {
            const user = userCredential.user
            console.log("file: SignUpScreen.js ~ line 50 ~ .then ~ user", user)
        })
        .catch((error) => {
            alert(error.message)
        });
        // Example Firebase version 8
        // auth(
        //     emailRef.current.value,
        //     passwordRef.current.value
        //     )
        //     .then((authUser) => {
        //         console.log(authUser)
        //     })
        //     .catch((error) => {
        //         alert(error.message)
        //     });
    };

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
                    ref ={emailRef} 
                    type="email"
                    placeholder="Email"
                    // onChange={(e) => setRegisterEmail(e.target.value)}
                />
                <input 
                    ref={passwordRef}
                    type="password"
                    placeholder="Password"
                    // onChange={(e) => setRegisterPassword(e.target.value)}
                />
                <button
                    type="submit"
                    onClick={signIn}                    
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
                    onClick={register}
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
