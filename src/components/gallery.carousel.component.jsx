import React, { useEffect } from "react";
import { useVLVillagesContext } from "../context";

/**vlv-villages version 3.11 - GalleryCarousel -
 * Features:
 * 
 *   --> Fixing a bug with 'nextButton' .       
 * 
 * Note: the error is fixed by adding:
 * 
 *      || imgs[0];
 *      || dots[0]
 * 
 * to reset to the first image in case for
 * and 'index' higher than the last
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

        /**updating the background color for the dot been selected */
        const updateDots = (currentDot, targetDot) => {
           currentDot.classList.remove('current--img');
           targetDot.classList.add('current--img')
        }
        
        /**Hide / Show Arrows */
        const hideShowArrows = (imgs, prevButton, nextButton, targetIndex) => {
            if (targetIndex === 0) {
                prevButton.classList.add('hidden');
                nextButton.classList.remove('hidden');
            }else if(targetIndex === imgs.length - 1){
                prevButton.classList.remove('hidden');
                nextButton.classList.add('hidden');
            }else{
                prevButton.classList.remove('hidden');
                nextButton.classList.remove('hidden');
            }
        }

        /**Next and Previous image functionality */
        nextButton.addEventListener("click", (e) => {
            const currentImg = listGallery.querySelector(".current--img");
            const currentDot = CarouselNav.querySelector(".current--img");
            const nextImg = currentImg.nextElementSibling || imgs[0];
            const nextDot = currentDot.nextElementSibling || dots[0];
          
            if (currentImg) {
              console.log(currentImg);
            } else {
              console.log("there is no element with .current--img class");
            }
          
            const nextIndex = imgs.findIndex((img) => img === nextImg);
            moveToImg(listGallery, currentImg, nextImg);
            updateDots(currentDot, nextDot);
            hideShowArrows(imgs, prevButton, nextButton, nextIndex);
          });

          prevButton.addEventListener('click', (e) => {
            const currentImg = listGallery.querySelector('.current--img');
            const currentDot = CarouselNav.querySelector('.current--img');
          
            // Get the previous dot
            const prevDot = currentDot.previousElementSibling;
          
            // Get the previous image
            const prevImg = currentImg.previousElementSibling;
          
            // Check if there is a previous image
            if (prevImg) {
              const prevIndex = imgs.findIndex((img) => img === prevImg);
              moveToImg(listGallery, currentImg, prevImg);
              updateDots(currentDot, prevDot);
              hideShowArrows(imgs, prevButton, nextButton, prevIndex);
            } else {
              console.log('There is no previous image.');
            }
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

            moveToImg(listGallery, currentImg, targetImg);
            updateDots(currentDot, targetDot);
            hideShowArrows(imgs, prevButton, nextButton, targetIndex);
        });
    } 
    
    useEffect(() => {
        list()
    },[])
    
    
    return(
        <section id="gallery-carousel">
            <button className="gallery-carousel--btn gallery-carousel--btn--left hidden">
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