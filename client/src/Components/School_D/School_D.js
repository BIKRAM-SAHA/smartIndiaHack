import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import Bottomobnav from '../Dashboard_Components/Navigation/bottomobnav'
import Dashtopnav from '../Dashboard_Components/Navigation/dashtopnav'
import Sidebar from '../Dashboard_Components/Navigation/Sidebar'
import AuthWrapper from '../LogIn/AuthWrapper'

function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}

const School_D = () => {
    const [menuOption, setMenuOption] = useState(1);
    const size = useWindowSize();
    return (
        <AuthWrapper>
          <div>
            {
              size.width >= 600 ?
              <Sidebar  />
              :
              <>
                <Dashtopnav />
                <div>
                {
                    menuOption === 1 ?  
                    <div>Home</div> 
                    : 
                    menuOption === 2 ?
                    <div>PATH</div>
                    : 
                    menuOption === 3 ?
                    <div>STAFF</div>
                    : 
                    menuOption === 4 ?
                    <div>NEWS</div>
                    : 
                    menuOption === 5 ?
                    <div>MORE</div>
                    : 
                    <></>
                }
                </div>
                <Bottomobnav menuOption={menuOption} setMenuOption={setMenuOption} />
              </>
            }
          </div>
        </AuthWrapper>
    )
}

export default School_D