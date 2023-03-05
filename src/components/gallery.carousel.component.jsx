import React, { useEffect } from "react";
import { useVLVillagesContext } from "../context";

/**vlv-villages version 3.05 - GalleryCarousel -
 * Features:
 * 
 *   --> Getting the 'width' of the images in the Carousel.
 * 
 *   --> Fixing error with deleted file 'utils'. 
 * 
 * Note: Motto data will be use for Motto Component.
 */

const GalleryCarousel = () => {
    
    const { galleryCarrouselData, galleryCarrouselImages } = useVLVillagesContext()
    
    //console.log('galleryCarrouselData ==>', galleryCarrouselData)

    //console.log('galleryCarrouselImages ==>', galleryCarrouselImages)
    
    const arrowLeft = galleryCarrouselData[0].icon;
    const arrowRight = galleryCarrouselData[1].icon;
    
    const list = () => {
        const listGallery = document.querySelector('.gallery-carousel--image-container--list');
        const styleClassChildren = listGallery.querySelectorAll('.gallery-carousel--image-container--list--item');
        /**here iu convert the NodeList in an array */
        const imgs = Array.from(styleClassChildren)

        const nextButton = document.querySelector(".gallery-carousel--btn--right");
        const prevButton = document.querySelector(".gallery-carousel--btn--left")
        const CarouselNav = document.querySelector(".gallery-carousel--nav");
        const dots = Array.from(CarouselNav.children)
        
        /**this is the list - is working*/
        /**so far jsx items as been selected */

        //console.log(imgs);

        /**buttons been selected */
        //console.log(nextButton);
        //console.log(prevButton);

        /**carousel nav */
        //console.log(CarouselNav)

        /**the dots */
        //console.log(dots)

        /**using 'getBoundingClientRect()' i want to get the width*/

        /**if a leave it like 'getBoundingClientRect()' i'll get way 
         * more props and i can select the one i need*/
        const imgWidth = imgs[0].getBoundingClientRect().width;
        //console.log(imgWidth)
    } 
    
    useEffect(() => {
        list()
    },[])
    
    
    return(
        <section id="gallery-carousel">
            <button className="gallery-carousel--btn gallery-carousel--btn--left">
                <i>{arrowLeft}</i>
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
                <i>{arrowRight}</i>
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