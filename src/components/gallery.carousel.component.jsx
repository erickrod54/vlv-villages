import React, { useEffect } from "react";
import { useVLVillagesContext } from "../context";

/**vlv-villages version 3.08 - GalleryCarousel -
 * Features:
 * 
 *   --> Matching indexes with 'gallery-carousel--nav'
 *      to update images as has been clicked.       
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

        /**Arranging images next to one another */
        
        /**old syntax
         * function setImgPosition(img, index){
            img.style.left = imgWidth * index + 'px'
        } */

        const setImgPosition = (img, index) => {
            img.style.left = imgWidth * index + 'px';
        }
        
        imgs.forEach(setImgPosition);

        /**Moving images next to one another */
        const moveToImg = (listGallery, currentImg, targetImg) => {
            listGallery.style.transform = 'translateX(-' + targetImg.style.left + ')';
            currentImg.classList.remove('current--img');
            targetImg.classList.add('current--img');
        }

        /**Next and Previous image functionality */
        nextButton.addEventListener('click', (e) => {
            const currentImg = listGallery.querySelector('.current--img')
            if (currentImg) {
                console.log(currentImg);
            }else{
                console.log('there is no element with .current--img class');
            }

            const nextImg = currentImg.nextElementSibling;
            
            moveToImg(listGallery, currentImg, nextImg)
            
        });

        prevButton.addEventListener('click', (e) => {
            const currentImg = listGallery.querySelector('.current--img')
            if (currentImg) {
                //console.log(currentImg);
            }else{
                //console.log('there is no element with .current--img class');
            }

            const prevImg = currentImg.previousElementSibling;
            
            moveToImg(listGallery, currentImg, prevImg)

            
        });
        
        /**Nav functionality */
        CarouselNav.addEventListener('click', (e) => {
            /**console.log(targetDot.target) */
            const targetDot = e.target.closest('button');
            //console.log(targetDot)

            //console.log('Function Stops');
            if(!targetDot) return;
            //console.log('Function Continues');
            
            const currentImg = listGallery.querySelector('.current--img');
            const currentDot = CarouselNav.querySelector('.current--img');
            /**targetDot because is the index of the button with them img */
            const targetIndex = dots.findIndex((dot) => dot === targetDot);
            const targetImg = imgs[targetIndex];

            moveToImg(listGallery, currentImg, targetImg)
        });
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
                            <li key={id} className="gallery-carousel--image-container--list--item current--img">
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
                <button className="gallery-carousel-nav--btn"></button>
                <button className="gallery-carousel-nav--btn"></button>
                <button className="gallery-carousel-nav--btn"></button>
                <button className="gallery-carousel-nav--btn"></button>
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