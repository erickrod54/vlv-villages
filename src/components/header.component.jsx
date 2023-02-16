import React from "react";
import { Link } from "react-router-dom";
import { useVLVillagesContext } from "../context";
import { LogoComponent } from '../components/index.components';
 import { HeaderContent } from '../components/index.components';

/**vlv-villages version 1.14 - HeaderComponent -
 * Features:
 * 
 *   --> Importing and placing 'HeaderContent'.
 * 
 * Note: Converting 'HeaderComponent' Component
 * in small Components
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
                <HeaderContent />
            </div>
        </header>
    )
}

export default HeaderComponent;