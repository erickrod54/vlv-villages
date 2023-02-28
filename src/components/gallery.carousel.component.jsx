import React from "react";
import { useVLVillagesContext } from "../context";

/**vlv-villages version 2.18 - GalleryCarousel -
 * Features:
 * 
 *   --> Building basic 'GalleryCarousel' component.
 * 
 * Note: Motto data will be use for Motto Component.
 */

const GalleryCarousel = () => {
    
    const { galleryCarrouselData } = useVLVillagesContext()

    console.log('galleryCarrouselData ==>', galleryCarrouselData)

    const arrowLeft = galleryCarrouselData[0].icon;
    const arrowRight = galleryCarrouselData[1].icon;

    return(
        <section id="gallery-carousel">
            <div className="gallery-carousel--btn gallery-carousel--btn--left">
                {arrowLeft}
            </div>
            <div className="gallery-carousel--image-container">
                <ul className="gallery-carousel--image-container--list">
                    <li className="gallery-carousel--image-container--list--item">
                        here is going to go the images
                    </li>
                </ul>
            </div>
            <div></div>
        </section>
    )
}

export default GalleryCarousel;