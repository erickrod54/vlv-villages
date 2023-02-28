import React, { useContext } from "react";
import { BookingDateData, BookingIcons, EventsTextTitle, galleryCarrouselData, galleryCarrouselImages, GalleryTextTitle, Images, mainNavLinks, MottoData, villasBackgorunds, villasData } from "./data";

/**vlv-villages version 2.19 - context js -
 * Features:
 * 
 *   --> Importing and providing 'galleryCarrouselImages'.
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
                galleryCarrouselData,
                galleryCarrouselImages
            }}>
            {children}
        </VLVillagesContext.Provider>
    )
} 


export const useVLVillagesContext = () => {
    return useContext(VLVillagesContext)
}