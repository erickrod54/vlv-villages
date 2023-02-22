import React, { useContext } from "react";
import { BookingDateData, BookingIcons, Images, mainNavLinks, villasData } from "./data";

/**vlv-villages version 2.06 - context js -
 * Features:
 * 
 *   --> Importing and providing 'villasData'.
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
                villasData
            }}>
            {children}
        </VLVillagesContext.Provider>
    )
} 


export const useVLVillagesContext = () => {
    return useContext(VLVillagesContext)
}