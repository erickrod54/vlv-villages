import React, { useContext } from "react";
import { BookingDateData, BookingIcons, EventsContentData, EventsTextTitle, featuresContentData, FeaturesTextTitle, footerBrandIcons, galleryCarrouselData, galleryCarrouselImages, GalleryTextTitle, Images, mainNavLinks, MottoData, testimonialBackgrounds, testimonialsData, villasBackgorunds, villasData } from "./data";

/**vlv-villages version 4.06 - context js -
 * Features:
 * 
 *   --> Importing and providing 'EventsContentData'.
 * 
 * Note: Motto data will be use for Motto Component.
 */

export const VLVillagesContext = React.createContext()

export const VLVillagesProvider = ({ children }) => {

    return(
        <VLVillagesContext.Provider 
            value={{
                Images,
                mainNavLinks,
                BookingIcons,
                BookingDateData,
                villasData,
                villasBackgorunds,
                MottoData,
                EventsTextTitle,
                GalleryTextTitle,
                FeaturesTextTitle,
                galleryCarrouselData,
                testimonialsData,
                galleryCarrouselImages,
                testimonialBackgrounds,
                footerBrandIcons,
                featuresContentData,
                EventsContentData
            }}>
            {children}
        </VLVillagesContext.Provider>
    )
} 


export const useVLVillagesContext = () => {
    return useContext(VLVillagesContext)
}