import React, { useContext } from "react";
import { BookingDateData, BookingIcons, EventsTextTitle, featuresContentData, FeaturesTextTitle, footerBrandIcons, galleryCarrouselData, galleryCarrouselImages, GalleryTextTitle, Images, mainNavLinks, MottoData, testimonialBackgrounds, testimonialsData, villasBackgorunds, villasData } from "./data";

/**vlv-villages version 4.04 - context js -
 * Features:
 * 
 *   --> Importing and providing 'featuresContentData'.
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
                featuresContentData
            }}>
            {children}
        </VLVillagesContext.Provider>
    )
} 


export const useVLVillagesContext = () => {
    return useContext(VLVillagesContext)
}