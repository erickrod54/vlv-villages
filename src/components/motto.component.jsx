import React from "react";
import styled from "styled-components";
import { useVLVillagesContext } from "../context";

/**vlv-villages version 3.01 - MottoComponent 
 * - Features:
 * 
 *   --> Building 'Motto' style Component.  
 * 
 * Note: Pending to separate the data from the markup.
 */

const MottoComponent = () => {

    const { MottoData } = useVLVillagesContext()

    //console.log('testing motto data ==>', MottoData)

    const title = MottoData[0].title
    const description = MottoData[1].description

    return(
        <section id="motto">
            <MottoWrapper>
            <div className="motto-content">
                <h2 className="motto-content--title">
                    {title}
                </h2>
                <p className="motto-content--para">
                {description}
                </p>
            </div>
            </MottoWrapper>
        </section>
    )
}

const MottoWrapper = styled.div`
    /*will center all the content*/
    .motto-content{
    width: 80%;
    margin: 0 auto;
    text-align: center;
    }

    .motto-content--title{
    font-size: var(--font-size-title);
    padding: 0 2rem 1rem;
    font-weight: 300;
    color: white;
    text-transform: uppercase;
    margin-bottom: 4rem;
    position: relative;
    }

    /*line below the title**/
    .motto-content--title::after{
    content: '';
    position: absolute;
    bottom: 0;
    left: 45%;
    height: 0.2rem;
    width: 10%;
    background-color: white;
}
`

export default MottoComponent;