import React from "react";
import { Link } from 'react-router-dom';
import { useVLVillagesContext } from "../context";

/**vlv-villages version 3.20 - FooterComponent -
 * Features:
 * 
 *   --> Building the Markup for 'FooterComponent'.
 * 
 * Note: Changes will be done later in this 
 * component
 */

const FooterComponent = () => {

    const { footerBrandIcons } = useVLVillagesContext()
    console.log('this is the data for footerBrandIcons ==>',footerBrandIcons)

    return(
        <section id="footer">
            <p>All Rights Reserved. &copy; VLV</p>
            <div className="footer-social">
                <Link to='#' className="footer-social--link">
                    facebook
                </Link>
                <Link to='#' className="footer-social--link">
                    instagram   
                </Link>
                <Link to='#' className="footer-social--link">
                    twitter         
                </Link>
                <Link to='#' className="footer-social--link">
                    linkedin         
                </Link>
            </div>
        </section>
    )
}

export default FooterComponent;