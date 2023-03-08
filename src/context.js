import React, { useContext } from "react";
import { BookingDateData, BookingIcons, EventsTextTitle, FeaturesTextTitle, galleryCarrouselData, galleryCarrouselImages, GalleryTextTitle, Images, mainNavLinks, MottoData, testimonialsData, villasBackgorunds, villasData } from "./data";

/**vlv-villages version 3.17 - context js -
 * Features:
 * 
 *   --> Importing and providing 'testimonialsData'.
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
                galleryCarrouselImages
            }}>
            {children}
        </VLVillagesContext.Provider>
    )
} 


export const useVLVillagesContext = () => {
    return useContext(VLVillagesContext)
}