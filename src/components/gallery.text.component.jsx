import React from "react";
import { useVLVillagesContext } from "../context";

/**vlv-villages version 2.17 - EventsText 
 * - Features:
 * 
 *   --> Destructuring and placing 'GalleryTextTitle'
 *       dat in the markup.  
 * 
 * Note: Pending to separate the data from the markup.
 */


const GalleryText = () => {

    const { GalleryTextTitle } = useVLVillagesContext()

    return(
        <section id="gallery-text">
        <div className="gallery-text-content">
            <h2 className="gallery-text-content--title">
                {GalleryTextTitle}
            </h2>
        </div>
    </section>
    )
}

export default GalleryText;