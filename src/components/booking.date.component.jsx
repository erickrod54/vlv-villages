import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { useVLVillagesContext } from "../context";

/**vlv-villages version 2.04 - BookingDate - Features:
 * 
 *   --> Building a 400px media query for 
 *      'booking-date_schedule'.
 * 
 * Note: this media query makes 'booking-date_schedule'
 * 1 column and three rows for smaller screens
 */

const BookingDate = () => {
    
    const { BookingDateData } = useVLVillagesContext()
    
    //console.log('this is then booking data ==>', BookingDateData)
    
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
            <BookingDateWrapper>
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
            </BookingDateWrapper>
        </section>
    )
}

const BookingDateWrapper = styled.div`
    .booking-date_schedule{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 2vw;
    place-items: center;
    }

    .booking-date_schedule--arrival,
    .booking-date_schedule--departure,
    .booking-date_schedule--guests{
    display: grid;
    grid-row-gap: 3vh;
    }

    .booking-date_schedule--arrival h5,
    .booking-date_schedule--departure h5,
    .booking-date_schedule--guests h5{
    font-size: calc(1rem + 1vw);
    text-align: center;
    }

    .booking-date_schedule--arrival > div,
    .booking-date_schedule--departure > div,
    .booking-date_schedule--guests > div{
        background-color: var(--color-secondary);
        padding: 2rem 4rem;

        display: grid;
        grid-template-rows: repeat(3, 1fr);
        place-items: center;
        position: relative;
    }

    /*Arrows styles**/
    .booking-date_schedule--arrival > div::before,
    .booking-date_schedule--departure > div::before,
    .booking-date_schedule--guests > div::before{
        content: '';
        position: absolute;
        bottom: 100%;
        left: 50%;
        border-width: 1.5rem;
        /*place arrow in the center**/
        margin-left: -1.5rem;
        border-style: solid;
        border-color: transparent transparent var(--color-secondary) transparent;
    }

    .booking-date_schedule--arrival > div p:nth-of-type(2),
    .booking-date_schedule--departure > div p:nth-of-type(2),
    .booking-date_schedule--guests > div p:nth-of-type(2){
    font-size: 3rem;
    font-weight: 700;
    }

    /**adding some margin to keep previous styles for the contact link */
    .booking-date_contact{
        align-self: end;
        margin-top:3rem;
    }

    .booking-date_contact--link:link,
    .booking-date_contact--link:visited{
    background-color: var(--color-secondary);
    color: white;
    transition: all var(--transition-duration) ease-in-out;
    }

    .booking-date_contact--link:hover,
    .booking-date_contact--link:active{
        color: var(--color-secondary);
        background-color: white;
        border: 0.1rem var(--color-secondary) solid;
    }

    .booking-date_contact p:first-of-type{
    margin-top: 4rem;
    }

    .booking-date_contact p:first-of-type,
    .booking-date_contact p:nth-of-type(2),
    .booking-date_contact p:nth-of-type(3){
    font-size: 2rem;
    color: var(--color-primary);
    }

    /*Booking date section ---- end**/

@media screen and (max-width:400px){
  /*all hte links**/
    .booking-date_schedule{
        grid-template-rows: repeat(3,1fr);
        grid-template-columns: auto;
        grid-row-gap: 4vh;
    }

    .booking-date_contact{
        justify-self: center;
        padding: 0.2rem;
    }
}
`

export default BookingDate;