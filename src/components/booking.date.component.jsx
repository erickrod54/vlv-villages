import React from "react";
import { Link } from 'react-router-dom';
import { useVLVillagesContext } from "../context";

/**vlv-villages version 2.00 - BookingDate - Features:
 * 
 *   --> Destructuring and testing 'BookingDateData'.
 *       from the context.
 * 
 * Note: pending to create constants to place data in JSX
 */

const BookingDate = () => {

    const { BookingDateData } = useVLVillagesContext()

    console.log('this is then booking data ==>', BookingDateData)

    /**Arrival data */

    /**Departure data */

    /**Guest data */

    /**Reservation data */

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