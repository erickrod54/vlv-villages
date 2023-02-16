import React from "react";
import { useVLVillagesContext } from "../context";

/**vlv-villages version 1.15 - data js -
 * Features:
 * 
 *   --> Building 'BookingContent' Component.
 * 
 *   --> Testing 'BookingIcons' from the context.    
 * 
 * Note: in this file will have place all data
 * related with the app
 */

const BookingContent = () => {
    
    const { BookingIcons } = useVLVillagesContext()

    console.log('these are the icons of Booking ==>', BookingIcons)

    return(
        <section id="booking-content">
            <h2 className="booking-content_title">Discover Serenity</h2>
            <p className="booking-content_para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Vestibulum lectus mauris
                ultrices eros in cursus turpis massa tincidunt. Congue quisque egestas diam in arcu.
            </p>

            <div className="booking-content_icons">
                <div className="booking-content_icons--weather"></div>
                <div className="booking-content_icons--time"></div>
            </div>            
        </section>
    )
}

export default BookingContent;