import React from "react";
import { Link } from 'react-router-dom';
import { useVLVillagesContext } from "../context";

/**vlv-villages version 2.01 - BookingDate - Features:
 * 
 *   --> Destructuring 'BookingDateData' and setting 
 *       variables.
 * 
 * Note: pending to create constants to place data in JSX
 */

const BookingDate = () => {

    const { BookingDateData } = useVLVillagesContext()

    console.log('this is then booking data ==>', BookingDateData)

    /**Arrival data */
    const arrivalTitle = BookingDateData[0].title;
    const arrivalMonth = BookingDateData[0].month;
    const arrivalDay = BookingDateData[0].day;

    /**Departure data */
    const departureTitle = BookingDateData[1].title;
    const departureMonth = BookingDateData[1].month;
    const departureDay = BookingDateData[1].day;

    /**Guest data */
    const guestTitle = BookingDateData[2].title;
    const guestNumber = BookingDateData[2].guestnumber;

    /**Reservation data */
    const contactTitle = BookingDateData[3].title;
    const contactPhonetitle = BookingDateData[3].phonetitle;
    const contactPhone = BookingDateData[3].phone;
    const contactReservation = BookingDateData[3].reservation;

    return(
        <section id="booking-date">
            <div className="booking-date_schedule">
                <div className="booking-date_schedule--arrival">
                    <h5>{arrivalTitle}</h5>
                    <div>
                        <p>{arrivalMonth}</p>
                        <p>{arrivalDay}</p>
                        <p>&#65088;</p>
                    </div>
                </div>
                <div className="booking-date_schedule--departure">
                    <h5>{departureTitle}</h5>
                    <div>
                        <p>{departureMonth}</p>
                        <p>{departureDay}</p>
                        <p>&#65088;</p>
                    </div>
                </div>
                <div className="booking-date_schedule--guests">
                    <h5>{guestTitle}</h5>
                    <div>
                        <p>&#65087;</p>
                        <p>{guestNumber}</p>
                        <p>&#65088;</p>
                    </div>
                </div>
            </div>
        
            <div className="booking-date_contact">
                <Link to='#' className="booking-date_contact--link">{contactTitle}</Link>
                <p>{contactPhonetitle}</p>
                <p>{contactPhone}</p>
                <p>{contactReservation}</p>
            </div>
        </section>
    )
}

export default BookingDate;