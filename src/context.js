import React, { useContext } from "react";
import { BookingDateData, BookingIcons, EventsContentData, EventsTextTitle, featuresContentData, FeaturesTextTitle, footerBrandIcons, galleryCarrouselData, galleryCarrouselImages, GalleryTextTitle, HeaderData, Images, mainNavLinks, MottoData, testimonialBackgrounds, testimonialsData, villasBackgorunds, villasData } from "./data";

/**vlv-villages version 4.07 - context js -
 * Features:
 * 
 *   --> Importing and providing 'HeaderData'.
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
                EventsContentData,
                HeaderData
            }}>
            {children}
        </VLVillagesContext.Provider>
    )
} 


export const useVLVillagesContext = () => {
    return useContext(VLVillagesContext)
}