import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { useVLVillagesContext } from "../context";

/**vlv-villages version 2.10 - VillasComponent 
 * - Features:
 * 
 *   --> Destructuring 'villasBackgorunds'
 * 
 *   --> Keeping 'villa1' to 'villa6' images 
 *       and drilling them to set the background.  
 * 
 * Note: the background image will be set to 'url'
 * as follows:
 * 
 *      'url(${({villa4}) => villa4 });'
 */

const VillasComponent = () => {

    const { villasData, villasBackgorunds } = useVLVillagesContext()

    /**  console.log('the villas data ==>', villasData)
    console.log('the villas backgrounds', villasBackgorunds) */

    const villa1 = villasBackgorunds[0].image;
    const villa2 = villasBackgorunds[1].image;
    const villa3 = villasBackgorunds[2].image;
    const villa4 = villasBackgorunds[3].image;
    const villa5 = villasBackgorunds[4].image;
    const villa6 = villasBackgorunds[5].image;

    return(
        <section id="villas">
        
           {villasData.map((villa) => {
            const { id, villaname, price, description } = villa;
            return(
                <VillasWrapper key={id} villa1={villa1} villa2={villa2} villa3={villa3} villa4={villa4} villa5={villa5} villa6={villa6}>

                <div className={`villas-${id}`}>
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
    background-position: center;
    background-size: cover;
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
    div[class^=villas]:nth-child(1n) a[class^=villas]:link::before,
    div[class^=villas]:nth-child(1n) a[class^=villas]:visited::before{
    transform: translate(-50%, -50%) rotate(45deg);
    }

    div[class^=villas]:nth-child(2n) a[class^=villas]:link::before,
    div[class^=villas]:nth-child(2n) a[class^=villas]:visited::before{
    transform: translate(-50%, -50%) rotate(-45deg);
    }

    /*effect of overflowing the button -- end */

    div[class^=villas] a:hover::before,
    div[class^=villas] a:active::before{
    height: 400%;
    }

    .villas-1{
    background: linear-gradient(
        var(--color-primary-light),
        var(--color-tertiary-light)),
        url(${({villa1}) => villa1 });
    }

    .villas-2{
    background: linear-gradient(
        var(--color-primary-light),
        var(--color-tertiary-light)),
        url(${({villa2}) => villa2 });
    }

    .villas-3{
    background: linear-gradient(
        var(--color-primary-light),
        var(--color-tertiary-light)),
        url(${({villa3}) => villa3 });
    }

    .villas-4{
    background: linear-gradient(
        var(--color-primary-light),
        var(--color-tertiary-light)),
        url(${({villa4}) => villa4 });
    }

    .villas-5{
    background: linear-gradient(
        var(--color-primary-light),
        var(--color-tertiary-light)),
        url(${({villa5}) => villa5 });
    }

    .villas-6{
    background: linear-gradient(
        var(--color-primary-light),
        var(--color-tertiary-light)),
        url(${({villa6}) => villa6 });
    }
`

export default VillasComponent;
