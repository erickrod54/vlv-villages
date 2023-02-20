import React from "react";
import styled from "styled-components";
import { useVLVillagesContext } from "../context";

/**vlv-villages version 1.17 - BookingContent -
 * Features:
 * 
 *   --> Building simple styel component for 
 *      later use  
 * 
 * Note: in this file will have place all data
 * related with the app
 */

const BookingContent = () => {
    
    const { BookingIcons } = useVLVillagesContext()

    console.log('these are the icons of Booking ==>', BookingIcons)

    const weatherIcon = BookingIcons[0].icon;
    const temperature = BookingIcons[0].temperature;

    const timeIcon = BookingIcons[1].icon;
    const time = BookingIcons[1].time;

    return(
        <section id="booking-content">
            <h2 className="booking-content_title">Discover Serenity</h2>
            <p className="booking-content_para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Vestibulum lectus mauris
                ultrices eros in cursus turpis massa tincidunt. Congue quisque egestas diam in arcu.
            </p>

            <div className="booking-content_icons">
                
                    <div className="booking-content_icons--weather">
                            {weatherIcon}
                        <p>
                            {temperature}
                            <sup>&#8451;</sup>
                        </p>
                        
                    </div>
                    <div className="booking-content_icons--time">
                            {timeIcon}
                        <p>
                            {time}
                        </p>
                    </div>
                
            </div>            
        </section>
    )
}

const BookingIconsWrapper = styled.div`
    svg{
        font-size: 4rem;
    }
`

export default BookingContent;