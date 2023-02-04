import React from "react";
import { Link } from "react-router-dom";

/**vlv-villages version 1.07 - HeaderComponent -
 * Features:
 * 
 *   --> Finishing context test
 * 
 * Note: Pending to make it dynamic by implementing
 * an array with the links, and set the background 
 * image 'hero'
 */

const HeaderComponent = () => {


    return(
        <header id="header">
            <nav className="header_main-nav">
                <input type='checkbox' />
                <div className="header_main-nav--hamburger" ><div></div></div>
                <div className="header_main-nav--menu">
                    <div>
                        <div>
                            <ul>
                                <li><Link to='#'>home</Link></li>
                            </ul>
                            <ul>
                                <li><Link to='#'>villas</Link></li>
                            </ul>
                            <ul>
                                <li><Link to='#'>about</Link></li>
                            </ul>
                            <ul>
                                <li><Link to='#'>contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default HeaderComponent;