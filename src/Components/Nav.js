import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router';
import '../styles/navStyle.css'

function Nav() {

    const [showNavBgrdClr, setShowNavBgrdClr] = useState(false);

    const history = useHistory()

    const transitionNavBar = () => {
        // window.scrollY > 100 ? setShowNavBgrdClr(false) : setShowNavBgrdClr(true);
        if(window.scrollY > 100) {
            setShowNavBgrdClr(true)
        } else {
            setShowNavBgrdClr(false)
        }
    };
    
        useEffect(() => {
            // use the transitionNavBar function when the page is being scrolled
            window.addEventListener('scroll', transitionNavBar);
            // when refreshig we need the page to b ein a  virgin state
            return () => window.removeEventListener('scroll', transitionNavBar)

        },[]);

    return (
        <div className={`nav ${showNavBgrdClr && 'nav__black'}`}>
            {/* <h1>Nav Component</h1> */}
            <div className="nav__content">
                <img 
                    className='nav__logo'
                    src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' 
                    alt='logo-netflix'
                />
                {/* Avatar */}
                <img 
                    className='nav__avatar'
                    src='https://pbs.twimg.com/media/DmBraqkXcAA1Yco.jpg' 
                    alt='avatar_pics' 
                    onClick={()=> history.push('/profil')}
                />
            </div>
        </div>
    )
}

export default Nav
