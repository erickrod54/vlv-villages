import React from "react";
import { useVLVillagesContext } from "../context";

/**vlv-villages version 3.19 - Testimonials -
 * Features:
 * 
 *   --> Destructuiring 'testimonialBackgrounds' 
 *       from the context.
 * 
 *   --> Testing data.
 * 
 * Note: Pending to bring the styles, make the markup
 * and set backgrounds
 */


const Testimonials = () => {

    const { testimonialsData, testimonialBackgrounds } = useVLVillagesContext();
    console.log('this is the testimonialBackgrounds cards data =>', testimonialBackgrounds)
    
    return(
        <section id="testimonials">
            
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
        </section>
    )
}

export default Testimonials;