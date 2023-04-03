import React from "react";
import { useVLVillagesContext } from "../context";

/**vlv-villages version 4.07 - EventsContent 
 * - Features:
 * 
 *   --> Placing data dynamicly in the Markup.  
 * 
 * Note: Pending to separate the data from the markup.
 */

const EventsContent = () => {

    const { EventsContentData } = useVLVillagesContext();
    console.log('EventsContentData ==>', EventsContentData)

    return(
        <section id="events-content">
            {EventsContentData.map((eventcontent) => {
                const { id, title, description } = eventcontent;

                return(
                <div key={id} className={`events-content--event-${id}`}>
                    <h2 className={`events-content--event-${id}--title`}>
                        {title}
                    </h2>
                    <p className={`events-content--event-${id}--para`}>
                     {description}
                    </p>
                </div>            
                )
            })}
        </section>
    )
}

export default EventsContent;