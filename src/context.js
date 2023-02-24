import React, { useContext } from "react";
import { BookingDateData, BookingIcons, Images, mainNavLinks, MottoData, villasBackgorunds, villasData } from "./data";

/**vlv-villages version 2.12 - context js -
 * Features:
 * 
 *   --> Importing and providing 'MottoData'.
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
                MottoData
            }}>
            {children}
        </VLVillagesContext.Provider>
    )
} 


export const useVLVillagesContext = () => {
    return useContext(VLVillagesContext)
}