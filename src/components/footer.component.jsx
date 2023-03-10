import React from "react";
import { Link } from 'react-router-dom';
import { useVLVillagesContext } from "../context";

/**vlv-villages version 4.00 - FooterComponent -
 * Features:
 * 
 *   --> Destructuring 'footerBrandIcons' and 
 *       placing icons.
 * 
 * Note: pending to change the name of the data icons
 */

const FooterComponent = () => {

    const { footerBrandIcons } = useVLVillagesContext()
    console.log('this is the data for footerBrandIcons ==>',footerBrandIcons)

    const facebook  = footerBrandIcons[0].imagesbkg
    const instagram = footerBrandIcons[1].imagesbkg
    const twitter   = footerBrandIcons[2].imagesbkg
    const linkedin  = footerBrandIcons[3].imagesbkg

    return(
        <section id="footer">
            <p>All Rights Reserved. &copy; VLV</p>
            <div className="footer-social">
                <Link to='#' className="footer-social--link">
                    <i>{facebook}</i>
                </Link>
                <Link to='#' className="footer-social--link">
                    <i>{instagram}</i> 
                </Link>
                <Link to='#' className="footer-social--link">
                    <i>{twitter}</i>     
                </Link>
                <Link to='#' className="footer-social--link">
                    <i>{linkedin}</i>         
                </Link>
            </div>
        </section>
    )
}

export default FooterComponent;