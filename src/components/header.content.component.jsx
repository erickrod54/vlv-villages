import React from "react";
import { Link } from 'react-router-dom';
import { useVLVillagesContext } from "../context";

/**vlv-villages version 4.07 - HeaderContent -
 * Features:
 * 
 *   --> Destructuring 'HeaderData' from the context.
 * 
 * Note: Pending to make it dynamic by implementing
 * an array with the links, and set the background 
 * image 'hero'
 */

const HeaderContent = () => {

    const { HeaderData } = useVLVillagesContext();
    console.log('HeaderData ==> ', HeaderData);

    const title = HeaderData[0].text
    const description = HeaderData[1].text
    const buttontext = HeaderData[2].text

    return(
    <div className="header_logo-content--content">
        <h1 className="header_logo-content--title">{title}</h1>
        <p className="header_logo-content--para">{description}</p>
        <Link to='#' className="header_logo-content--link">{buttontext}</Link>
    </div>     
    )
}

export default HeaderContent;