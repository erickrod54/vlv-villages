import React from "react";
import styled from "styled-components";
import { useVLVillagesContext } from "../context";
/**vlv-villages version 3.20 - Testimonials -
 * Features:
 * 
 *   --> Destructuiring 'testimonialBackgrounds' 
 *       in each background and drilling them to 
 *       to style Component.
 * 
 *   --> Completing background 'url' with the function
 *       helper.
 * 
 * Note: Pending to set a note about how to set and 
 * Complete background 'url' with the function helper
 * in the readme file
 */


const Testimonials = () => {
    
    const { testimonialsData, testimonialBackgrounds } = useVLVillagesContext();
    //console.log('this is the testimonialBackgrounds cards data =>', testimonialBackgrounds)

    const bkg1 = testimonialBackgrounds[0].imagesbkg;
    const bkg2 = testimonialBackgrounds[1].imagesbkg;
    const bkg3 = testimonialBackgrounds[2].imagesbkg;
    const bkg4 = testimonialBackgrounds[3].imagesbkg;
    const bkg5 = testimonialBackgrounds[4].imagesbkg;
    const bkg6 = testimonialBackgrounds[5].imagesbkg;
    
    //console.log('this is the bkg ==>', bkg1)
    
    return(
        <TestimonialsWrapper id="testimonials" bkg1={bkg1} bkg2={bkg2} bkg3={bkg3} bkg4={bkg4} bkg5={bkg5} bkg6={bkg6}>
            
            {testimonialsData.map((card) => {
                const { id, title, description } = card
                return(
                    <div key={id} className="testimonials-card">
                    <div className="testimonials-card--front">
                    <h2>{title}</h2>
                    </div>
                    <div className="testimonials-card--back">
                        <p>{description}</p>
                    </div>
                </div>
                )
            })}
        </TestimonialsWrapper>
    )
}

const TestimonialsWrapper = styled.section`
   .testimonials-card{
    width: 28rem;
    height: 50rem;
    position: relative;
    }

    .testimonials-card--front,
    .testimonials-card--back{
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 2s ease-in-out;
    backface-visibility: hidden;
    transform: perspective(100rem);

    display: grid;
    justify-items: center;
    align-items: start;
    padding: 3rem;
    }

    .testimonials-card--front h2{
    background-color: var(--color-secondary-light);
    padding: 1rem;
    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 50%;
    }

    .testimonials-card--back p{
    place-self: center;
    font-size: 2rem;
    font-weight: 400;
    }

    .testimonials-card:first-child .testimonials-card--front{
        background-image: url(${({bkg1}) => bkg1});
    }

    .testimonials-card:nth-child(2) .testimonials-card--front{
        background-image: url(${({bkg2}) => bkg2});
    }

    .testimonials-card:nth-child(3) .testimonials-card--front{
        background-image: url(${({bkg3}) => bkg3});
    }

    .testimonials-card:nth-child(4) .testimonials-card--front{
        background-image: url(${({bkg4}) => bkg4});
    }

    .testimonials-card:nth-child(5) .testimonials-card--front{
        background-image: url(${({bkg5}) => bkg5});
    }

    .testimonials-card:nth-child(6) .testimonials-card--front{
        background-image: url(${({bkg6}) => bkg6});
    }

    .testimonials-card--back {
    /*this prop using 'rotateY'  is related with 'backface-visibility: hidden;'*/
    /*the 'perspective(100rem)' with hover will make the 3d effect**/
    transform: perspective(100rem) rotateY(0.5turn);
    background-color: var(--color-secondary); 
    }

    /*the 'perspective(100rem)' with hover will make the 3d effect - 0.5turn = 180deg**/
    .testimonials-card:hover .testimonials-card--front{
    transform: perspective(100rem) rotateY(0.5turn);
    }

    /*the 'perspective(100rem)' with hover will make the 3d effect**/
    .testimonials-card:hover .testimonials-card--back{
    transform: perspective(100rem) rotateY(1turn);
    }
`

export default Testimonials;