import React from "react";
import { useVLVillagesContext } from "../context";

/**vlv-villages version 4.05 - FeaturesContent  -
 * Features:
 * 
 *   --> Placing data dynamicly in the Markup.    
 * 
 * Note: Changes will be done later in this 
 * component
 */


const FeaturesContent = () => {

    const { featuresContentData } = useVLVillagesContext()
    console.log('this is the data for FeaturesContent ==>', featuresContentData)

    return(
        <section id="features-content">
            {featuresContentData.map((content) => {
                const { id, title, description } = content;
                return(
                    <div key={id} className={`features-content--feature--${id}`}>
                    <h2 className={`features-content--feature--${id}--title`}>
                        {title}
                    </h2>
                    <p className={`features-content--feature--${id}--para`}>
                     {description}
                    </p>
                </div> 
                )
            })}
        </section>
    )
}

export default FeaturesContent;