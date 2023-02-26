import React from "react";

/**vlv-villages version 2.13 - EventsContent 
 * - Features:
 * 
 *   --> Building 'EventsContent' basic Component.  
 * 
 * Note: Pending to separate the data from the markup.
 */

const EventsContent = () => {

    return(
        <section id="events-content">
            <div className="events-content--event-1">
                <h2 className="events-content--event-1--title">
                    Beach Party
                </h2>
                <p className="events-content--event-1--para">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut consequat semper viverra nam libero justo. Leo vel orci porta non pulvinar neque laoreet suspendisse
                </p>
            </div>
            <div className="events-content--event-2">
                <h2 className="events-content--event-2--title">
                    Culture Discover
                </h2>
                <p className="events-content--event-2--para">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut consequat semper viverra nam libero justo. Leo vel orci porta non pulvinar neque laoreet suspendisse
                </p>
            </div>
        </section>
    )
}

export default EventsContent;