import React from 'react';
import { useSelector } from 'react-redux';
import Nav from '../Components/Nav';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import '../styles/profileScreen_old.css';

function ProfileScren() {

    const user = useSelector(selectUser);
    // console.log("file: ProfileScren.js ~ line 11 ~ ProfileScren ~ user", user)

    return (
        <div className="profileScreen">
                {/* <h1 className="textColor">I AM THE PROFILE SCREEN</h1> */}
            <Nav/>
            <div className="profilScrn__Content">
                <h1>Edit Profil</h1>
                <div className="profScrn__Info">
                    <img src="https://pbs.twimg.com/media/DmBraqkXcAA1Yco.jpg" alt="avatar Pic" />
                    <div className="profScrn__Details">
                        <h2 
                            className="title_Profil"  
                        >
                            {user.email}
                        </h2>        
                        <div className="profilScrn__Plans">
                            <h3 className="h3_title">
                                    Plans
                                    <span>(Current Plan: Premium)</span>
                            </h3>
                            <h4 className="plans__RenewalDate">
                                Renewal date:
                            </h4>

                            <div className="plan__Container">
                                
                                <div className="plan__Structure">
                                    <div className="plans_details">
                                        <h6>Netflix Premium</h6>
                                        <h6>4K+HDR</h6>
                                    </div>
                                    <button
                                        className="plan_Subscribe_Btn"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                                    
                                {/* <div className="overlay"> <h1>ABSOLUTE DIV</h1></div> */}
                                <div className="overlay"></div>

                            </div>

                            {/* <div className="plan__Container"> */}

                                <div className="plan__Structure">
                                    <div className="plans_details overlay__2">
                                        <h6>Netflix Standard</h6>
                                        <h6>1080p</h6>  
                                    </div>
                                    
                                    <button
                                        className="plan_Subscribe_Btn"
                                    >
                                        Subscribe
                                    </button>
                                </div>

                            {/* </div> */}

                            <div className="plan__Container">
                                
                                <div className="plan__Structure">

                                        <div className="plans_details">
                                            <h6>Netflix Basic</h6>
                                            <h6>480p</h6>
                                        </div>
                                        <button
                                            className="plan_Subscribe_Btn"
                                        >
                                            Subscribe
                                        </button>
                                </div>

                            </div>

                            <div className="plan__Structure ">
                                <div className="plans_details">
                                    <h6>Netflix Premium</h6>
                                    <h6>4k+HDR</h6>
                                </div>
                                <button
                                    className="plan_Subscribe_Btn current__Plan"
                                >
                                    Current Package
                                </button>
                            </div>
                            
                            <button 
                                className="signOut____Btn"
                                onClick={() => signOut(auth)}
                            >
                                Sign Out
                            </button>
                        </div>
                    </div>
                    
                </div>
            </div>       
        </div>
    )     
}

export default ProfileScren;
