import React from "react";
import styled from "styled-components";
import { useVLVillagesContext } from "../context";

/**vlv-villages version 1.18 - BookingContent -
 * Features:
 * 
 *   --> Wrapping content of 'booking-content' 
 *       with 'BookingIconsWrapper'
 * 
 * Note: By this version the components styles 
 * are migarted
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
            <BookingIconsWrapper>
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
            </BookingIconsWrapper>
        </section>
    )
}

const BookingIconsWrapper = styled.div`
/*this styles are placed now in the style component**/
.booking-content_title{
  font-size: var(--font-size-title);
  padding: 0 2rem 1rem;
  font-weight: 300;
  position: relative;
}

/*this is the line below the main title**/
.booking-content_title::after{
  content: '';
  position: absolute;
  bottom: 0;
  left: 15%;
  /*the height of the line**/
  height: 0.2rem;
  width: 30%;
  background-color: var(--color-secondary);
}

.booking-content_para{
  padding: 2rem;
}

 p {
  color: var(--color-primary);
}

.booking-content_icons{
  margin-left: 2rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.booking-content_icons--weather,
.booking-content_icons--time{
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-template-rows: 10vh;
  place-items: center;
}

svg{
  font-size: 4rem;
  color: var(--color-secondary);
}

/*Booking content section ---- end**/
`

export default BookingContent;