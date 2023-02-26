import React from "react";
import { useVLVillagesContext } from "../context";

/**vlv-villages version 2.13 - MottoComponent 
 * - Features:
 * 
 *   --> Destruturing 'MottoData' from the context.
 * 
 *   --> Placing data in the markup.  
 * 
 * Note: Pending to separate the data from the markup.
 */

const MottoComponent = () => {

    const { MottoData } = useVLVillagesContext()

    console.log('testing motto data ==>', MottoData)

    const title = MottoData[0].title
    const description = MottoData[1].description

    return(
        <section id="motto">
            <div className="motto-content">
                <h2 className="motto-content--title">
                    {title}
                </h2>
                <p className="motto-content--para">
                {description}
                </p>
            </div>
        </section>
    )
}

export default MottoComponent;