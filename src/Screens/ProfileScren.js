import React from 'react';
import { useSelector } from 'react-redux';
import Nav from '../Components/Nav';
import Plans_ProfilScreen from '../Components/Plans_ProfilScreen';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
// import { signOut } from 'firebase/auth';
import '../styles/profileScreen.css';

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
                            {/* <h4 className="plans__RenewalDate">
                                Renewal date:
                            </h4> */}

                            <Plans_ProfilScreen/>
                            
                            <button 
                                className="signOut____Btn"
                                onClick={() => auth.signOut()}
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
