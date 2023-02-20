import React from "react";
import { Link } from 'react-router-dom';

/**vlv-villages version 1.20 - BookingDate - Features:
 * 
 *   --> Building 'BookingDate' Component.
 * 
 * Note: pending to migrate styles to their own
 *style component
 */

const BookingDate = () => {

    return(
        <section id="booking-date">
            <div className="booking-date_schedule">
                <div className="booking-date_schedule--arrival">
                    <h5>Arrival</h5>
                    <div>
                        <p>May</p>
                        <p>09</p>
                        <p>&#65088;</p>
                    </div>
                </div>
                <div className="booking-date_schedule--departure">
                    <h5>Departures</h5>
                    <div>
                        <p>May</p>
                        <p>23</p>
                        <p>&#65088;</p>
                    </div>
                </div>
                <div className="booking-date_schedule--guests">
                    <h5>Guests</h5>
                    <div>
                        <p>&#65087;</p>
                        <p>01</p>
                        <p>&#65088;</p>
                    </div>
                </div>
            </div>
        
            <div className="booking-date_contact">
                <Link to='#' className="booking-date_contact--link">Make a Reservation</Link>
                <p>Reservation Hotline</p>
                <p>+1-5263-8965-6547</p>
                <p>Reservation Assistance Available 24 hours</p>
            </div>
        </section>
    )
}

export default BookingDate;