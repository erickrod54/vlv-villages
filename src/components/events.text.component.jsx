import React from "react";
import { useVLVillagesContext } from "../context";

/**vlv-villages version 2.15 - EventsText 
 * - Features:
 * 
 *   --> Building 'EventsTextTitle'.  
 * 
 * Note: Pending to separate the data from the markup.
 */

const EventsText = () => {
    
    const { EventsTextTitle } = useVLVillagesContext()
    return(
        <section id="events-text">
            <div className="events-text-content">
                <h2 className="events-text-content--title">
                  {EventsTextTitle}  
                </h2>
            </div>
        </section>
    )
}

export default EventsText;