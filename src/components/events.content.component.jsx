import React from "react";
import { useVLVillagesContext } from "../context";

/**vlv-villages version 4.06 - EventsContent 
 * - Features:
 * 
 *   --> Destructuring 'EventsContentData' and
 *       placing it in the Markup.  
 * 
 * Note: Pending to separate the data from the markup.
 */

const EventsContent = () => {

    const { EventsContentData } = useVLVillagesContext();
    console.log('EventsContentData ==>', EventsContentData)

    const title1 = EventsContentData[0].title;
    const description1 = EventsContentData[0].description;
    const title2 = EventsContentData[1].title;
    const description2 = EventsContentData[1].description;

    return(
        <section id="events-content">
            <div className="events-content--event-1">
                <h2 className="events-content--event-1--title">
                    {title1}
                </h2>
                <p className="events-content--event-1--para">
                 {description1}
                </p>
            </div>
            <div className="events-content--event-2">
                <h2 className="events-content--event-2--title">
                    {title2}
                </h2>
                <p className="events-content--event-2--para">
                 {description2}
                </p>
            </div>
        </section>
    )
}

export default EventsContent;