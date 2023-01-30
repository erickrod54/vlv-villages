import React from "react";
import { HeaderComponent, BookingComponent, VillasComponent, MottoComponent, EventsComponent, GalleryComponent, FeaturesComponent, Testimonials, FooterComponent } from '../components/index.components'

/**vlv-villages version 1 - HomePage - Features:
 * 
 *   --> Building 'HomePage' Page.
 * 
 * Note: First page page component
 */

const HomePage = () => {

    return(
        <>
            <h2>Home Page Component</h2>
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