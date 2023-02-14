import React from "react";
import { Link } from "react-router-dom";
import { useVLVillagesContext } from "../context";
import { LogoComponent } from '../components/index.components';
 
/**vlv-villages version 1.13 - HeaderComponent -
 * Features:
 * 
 *   --> Importing and placing 'LogoComponent'.
 * 
 * Note: Pending to make it dynamic by implementing
 * an array with the links, and set the background 
 * image 'hero'
 */

const HeaderComponent = () => {

    const { mainNavLinks } = useVLVillagesContext();

    return(
        <header id="header">
            <nav className="header_main-nav">
                <input type='checkbox' />
                <div className="header_main-nav--hamburger" ><div></div></div>
                <div className="header_main-nav--menu">
                    <div>
                        <div>
                            {mainNavLinks.map((link) => {
                                const {id, linkname } = link;
                                return(
                                    <ul key={id}>
                                        <li><Link to='#'>{linkname}</Link></li>
                                    </ul>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </nav>
            <div className="header_logo-content">
                <LogoComponent />

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