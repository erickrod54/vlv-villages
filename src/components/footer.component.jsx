import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { useVLVillagesContext } from "../context";

/**vlv-villages version 4.03 - FooterComponent -
 * Features:
 * 
 *   --> Mapping 'footerBrandIcons' and displaying 
 *      icons dynamicly in the Markup.
 * 
 * Note: pending to make dynamic data and to add
 * the map of the data
 */

const FooterComponent = () => {
    
    const { footerBrandIcons } = useVLVillagesContext()
    //console.log('this is the data for footerBrandIcons ==>',footerBrandIcons)
    
    return(
        <FooterWrapper id="footer">
            <p>All Rights Reserved. &copy; VLV</p>
            <div className="footer-social">
                {footerBrandIcons.map((icon) => {
                    const { id, socialicons } = icon
                    return(
                        <Link key={id} to='#' className="footer-social--link">
                            <i>{socialicons}</i>         
                        </Link>
                    )
                })}
            </div>
        </FooterWrapper>
    )
}

const FooterWrapper = styled.section`
    .footer-social--link:link,
    .footer-social--link:visited{
        margin-top: 4rem;
        display: inline-block;
        background-color: var(--color-secondary);
        border-radius: 4rem;
        margin-right: 1rem;
        box-shadow: 0.5rem 0.5rem 2rem 0.5rem var(--color-secondary-light), -0.5rem -0.5rem 2rem 0.5rem var(--color-secondary-light);
        transform: scale(0.8);
        animation: social 3s linear infinite;
    }

    @keyframes social {
    0%{
        opacity: 0;
    }

    50%{
        opacity: 1;
        transform: scale(1.2);
    }

    100%{
        opacity: 0;
    }
    }

    .footer-social--link i{
        font-size: 2rem;
        color: var(--color-primary);
    }

    .footer-social--link:link:nth-child(1),
    .footer-social--link:visited:nth-child(1){
        animation-delay: 0s;
    }

    .footer-social--link:link:nth-child(2),
    .footer-social--link:visited:nth-child(2){
        animation-delay: 0.3s;
    }

    .footer-social--link:link:nth-child(3),
    .footer-social--link:visited:nth-child(3){
    animation-delay: 0.6s;
    }

    .footer-social--link:link:nth-child(4),
    .footer-social--link:visited:nth-child(4){
        animation-delay: 0.9s;
    }
`

export default FooterComponent;