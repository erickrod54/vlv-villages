import React from "react";
import { Link } from 'react-router-dom';

/**vlv-villages version 1.12 - index.components -
 * Features:
 * 
 *   --> Building 'LogoComponent'.
 * 
 * Note: it's been built in order to reuse the 
 * component and start with the header convertion
 * to a set of components
 */

const LogoComponent = () => {

    return(
        <Link to="#" className="header_logo-content--logo">
                    <span>V</span>L<span>V</span>
        </Link>
    )
}

export default LogoComponent;