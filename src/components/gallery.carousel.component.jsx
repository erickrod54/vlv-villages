import React from "react";
import { useVLVillagesContext } from "../context";

/**vlv-villages version 2.20 - GalleryCarousel -
 * Features:
 * 
 *   --> Finishing Markup for 'GalleryCarousel'. 
 * 
 * Note: Motto data will be use for Motto Component.
 */

const GalleryCarousel = () => {
    
    const { galleryCarrouselData, galleryCarrouselImages } = useVLVillagesContext()

    //console.log('galleryCarrouselData ==>', galleryCarrouselData)

    console.log('galleryCarrouselImages ==>', galleryCarrouselImages)

    const arrowLeft = galleryCarrouselData[0].icon;
    const arrowRight = galleryCarrouselData[1].icon;

    return(
        <section id="gallery-carousel">
            <button className="gallery-carousel--btn gallery-carousel--btn--left">
                {arrowLeft}
            </button>
            <div className="gallery-carousel--image-container">
                <ul className="gallery-carousel--image-container--list">
                    {galleryCarrouselImages.map((picture) => {
                        const { id, image } = picture;

                        return(
                            <li key={id} className="gallery-carousel--image-container--list--item">
                                <img src={image} alt='villa'/>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <button className="gallery-carousel--btn gallery-carousel--btn--right">
                {arrowRight}
            </button>
            <div className="gallery-carousel--nav">
                <button className="gallery-carousel-nav--btn current--img"></button>
                <button className="gallery-carousel-nav--btn">12</button>
                <button className="gallery-carousel-nav--btn">13</button>
                <button className="gallery-carousel-nav--btn">14</button>
                <button className="gallery-carousel-nav--btn">15</button>
                <button className="gallery-carousel-nav--btn"></button>
                <button className="gallery-carousel-nav--btn"></button>
                <button className="gallery-carousel-nav--btn"></button>
                <button className="gallery-carousel-nav--btn"></button>
                <button className="gallery-carousel-nav--btn"></button>
                <button className="gallery-carousel-nav--btn"></button>
            </div>
        </section>
    )
}

export default GalleryCarousel;