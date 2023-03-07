import React from "react";
import { useVLVillagesContext } from "../context";

/**vlv-villages version 3.15 - FeaturesText -
 * Features:
 * 
 *   --> Destrcuturing 'FeaturesTextTitle' from
 *       the context.
 * 
 * Note: Changes will be done later in this 
 * component
 */

const FeaturesText = () => {

    const { FeaturesTextTitle } = useVLVillagesContext()

    return(
        <section id="features-text">
            <div className="features-text-content">
                <h2 className="features-text-content--title">
                    {FeaturesTextTitle}
                </h2>
            </div>
        </section>
    )
}

export default FeaturesText;