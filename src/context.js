import React, { useContext } from "react";
import { BookingDateData, BookingIcons, Images, mainNavLinks, villasBackgorunds, villasData } from "./data";

/**vlv-villages version 2.08 - context js -
 * Features:
 * 
 *   --> Importing and providing 'villasBackgorunds'.
 * 
 * Note: Changes will be done later in this 
 * component
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
                villasBackgorunds
            }}>
            {children}
        </VLVillagesContext.Provider>
    )
} 


export const useVLVillagesContext = () => {
    return useContext(VLVillagesContext)
}