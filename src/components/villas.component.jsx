import React from "react";
import { Link } from 'react-router-dom';
import { useVLVillagesContext } from "../context";

/**vlv-villages version 2.06 - VillasComponent 
 * - Features:
 * 
 *   --> Destructuring 'villasData' from the 
 *      context.
 * 
 *   --> Refactoring 'VillasComponent'.  
 * 
 * Note: Pending to build the data amd the 
 * styles.
 */

const VillasComponent = () => {

    const { villasData } = useVLVillagesContext()

    console.log('the villas data ==>', villasData)

    return(
        <section id="villas">
           {villasData.map((villa) => {
            const { id, villaname, price, description } = villa;

            return(
                <div key={id} className={`villas-${id}`}>
                    <h2 className={`villas-${id}--title`}>{villaname}</h2>
                    <p>{description}</p>
                    <Link to='#' className={`villas-${id}--link`}>{price}</Link>
                </div>
            )
           })}     
        </section>
    )
}

export default VillasComponent;
