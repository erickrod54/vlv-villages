import React from "react";
import { useVLVillagesContext } from "../context";

/**vlv-villages version 4.04 - FeaturesContent  -
 * Features:
 * 
 *   --> Destructuring from the context 'featuresContentData'.
 * 
 *   --> Testing data.    
 * 
 * Note: Changes will be done later in this 
 * component
 */


const FeaturesContent = () => {

    const { featuresContentData } = useVLVillagesContext()
    console.log('this is the data for FeaturesContent ==>', featuresContentData)

    return(
        <section id="features-content">
            <div className="features-content--feature--1">
                <h2 className="features-content--feature--1--title">
                    Cocktail Package
                </h2>
                <p className="features-content--feature--1--para">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut consequat semper viverra nam libero justo. Leo vel orci porta non pulvinar neque laoreet suspendisse
                </p>
            </div>

            <div className="features-content--feature--2">
                <h2 className="features-content--feature--2--title">
                    Surfing Package
                </h2>
                <p className="features-content--feature--2--para">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut consequat semper viverra nam libero justo. Leo vel orci porta non pulvinar neque laoreet suspendisse
                </p>
            </div>
        </section>
    )
}

export default FeaturesContent;