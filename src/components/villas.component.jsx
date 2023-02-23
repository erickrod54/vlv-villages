import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { useVLVillagesContext } from "../context";

/**vlv-villages version 2.09 - VillasComponent 
 * - Features:
 * 
 *   --> Migrating styles to it's own style 
 *       Component.  
 * 
 * Note: Pending to fix background images.
 */

const VillasComponent = () => {

    const { villasData } = useVLVillagesContext()

    console.log('the villas data ==>', villasData)

    return(
        <section id="villas">
        
           {villasData.map((villa) => {
            const { id, villaname, price, description } = villa;
            return(
                <VillasWrapper>

                <div key={id} className={`villas-${id}`}>
                    <h2 className={`villas-${id}--title`}>{villaname}</h2>
                    <p>{description}</p>
                    <Link to='#' className={`villas-${id}--link`}>{price}</Link>
                </div>

                </VillasWrapper>
            )
           })}         
        
        </section>
    )
}

const VillasWrapper = styled.div`
    /** Caret selector -to select all villas- -*/
    div[class^=villas]{
    padding: 2rem;
    /*background-position: center;*/
    /*background-size: cover;**/
    transition: transform var(--transition-duration) ease-in-out;
    }

    div[class^=villas]:hover,
    div[class^=villas]:active{
    transform: scale(1.05);
    }

    div[class^=villas] h2[class^=villas]{
    font-size: var(--font-size-title);
    /*with this padding i align the title with the paragraph**/
    padding: 0.2rem 1rem -1;
    font-weight: 400;
    color: white;
    text-transform: uppercase;
    }

    div[class^=villas] p{
    font-size: 2rem;
    margin: 1.5rem 0 4rem 0;
    color: white;
    font-weight: 500;
    }

    div[class^=villas] a:link,
    div[class^=villas] a:visited{
    /*is 'inline-block' in order to be able to apply margin*/
    display: inline-block;
    margin-bottom: 2rem;
    background-color: white;
    color: var(--color-primary);
    z-index: 2;
    overflow: hidden;
    }

    div[class^=villas] a:hover,
    div[class^=villas] a:active{
    color: white;
    }

    div[class^=villas] a:link::before,
    div[class^=villas] a:visited::before{
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 0;
    z-index: -1;
    background-color: var(--color-secondary);
    transition: height var(--transition-duration) ease-in-out;
    }

    /*effect of overflowing the button -- start */
    div[class^=villas]:nth-child(1n) a:link::before,
    div[class^=villas]:nth-child(1n) a:visited::before{
    transform: translate(-50%, -50%) rotate(45deg);
    }

    div[class^=villas]:nth-child(2n) a:link::before,
    div[class^=villas]:nth-child(2n) a:visited::before{
    transform: translate(-50%, -50%) rotate(-45deg);
    }

    /*effect of overflowing the button -- end */

    div[class^=villas] a:hover::before,
    div[class^=villas] a:active::before{
    height: 400%;
    }

    /*background-position: center;
    background-size: cover;**/

    .villas-1{
    background: linear-gradient(
        var(--color-primary-light),
        var(--color-tertiary-light)),
        url('./assets/Villas/villa-1.jpg');
    }

    .villas-2{
    background: linear-gradient(
        var(--color-primary-light),
        var(--color-tertiary-light)),
        url('./assets/Villas/villa-2.jpg');
    }

    .villas-3{
    background: linear-gradient(
        var(--color-primary-light),
        var(--color-tertiary-light)),
        url('./assets/Villas/villa-3.jpg');
    }

    .villas-4{
    background: linear-gradient(
        var(--color-primary-light),
        var(--color-tertiary-light)),
        url('./assets/Villas/villa-4.jpg');
    }

    .villas-5{
    background: linear-gradient(
        var(--color-primary-light),
        var(--color-tertiary-light)),
        url('./assets/Villas/villa-5.jpg');
    }

    .villas-6{
    background: linear-gradient(
        var(--color-primary-light),
        var(--color-tertiary-light)),
        url('./assets/Villas/villa-6.jpg');
    }
`

export default VillasComponent;
