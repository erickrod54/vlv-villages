import React from "react";
import { HeaderComponent, BookingComponent, VillasComponent, MottoComponent, EventsComponent, GalleryComponent, FeaturesComponent, Testimonials, FooterComponent } from '../components/index.components'

/**vlv-villages version 4.00 - HomePage - Features:
 * 
 *   --> Clearing titles.
 * 
 * Note: First page page component
 */

const HomePage = () => {

    return(
        <>
            <div className="container">
                <HeaderComponent />
                <BookingComponent />
                <VillasComponent />
                <MottoComponent />
                <EventsComponent />
                <GalleryComponent />
                <FeaturesComponent />
                <Testimonials />
                <FooterComponent />
            </div>
        </>
    )
}

export default HomePage;