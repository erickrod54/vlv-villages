import React from "react";
import { Link } from 'react-router-dom';

/**vlv-villages version 1.14 - HeaderContent -
 * Features:
 * 
 *   --> Building 'HeaderContent'.
 * 
 *   --> Chyanging anchor tag for 'Link' from
 *       'router-react-dom'
 * 
 * Note: Pending to make it dynamic by implementing
 * an array with the links, and set the background 
 * image 'hero'
 */

const HeaderContent = () => {

    return(
    <div className="header_logo-content--content">
        <h1 className="header_logo-content--title">Relax your soul</h1>
        <p className="header_logo-content--para">The team of VLV welcomes you. Start relaxing your soul and enjoy your stay</p>
        <Link to='#' className="header_logo-content--link">Discover more</Link>
    </div>     
    )
}

export default HeaderContent;