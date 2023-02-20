import React, { useContext } from "react";
import { BookingDateData, BookingIcons, Images, mainNavLinks } from "./data";

/**vlv-villages version 2.00 - context js -
 * Features:
 * 
 *   --> Importing and providing 'BookingDateData'.
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
                BookingDateData
            }}>
            {children}
        </VLVillagesContext.Provider>
    )
} 


export const useVLVillagesContext = () => {
    return useContext(VLVillagesContext)
}