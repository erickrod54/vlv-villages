import React from "react";
import { Link } from "react-router-dom";

/**vlv-villages version 1.09 - HeaderComponent -
 * Features:
 * 
 *   --> Building all header content.
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
            <div className="header_logo-content">
                <a href="#" className="header_logo-content--logo">
                    <span>V</span>L<span>V</span>
                </a>

                <div className="header_logo-content--content">
                    <h1 className="header_logo-content--title">Relax your soul</h1>
                    <p className="header_logo-content--para">The team of VLV welcomes you. Start relaxing your soul and enjoy your stay</p>
                    <a href="#" className="header_logo-content--link">Discover more</a>
                </div>
            </div>
        </header>
    )
}

export default HeaderComponent;