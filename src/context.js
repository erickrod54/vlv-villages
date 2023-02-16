import React, { useContext } from "react";
import { BookingIcons, Images, mainNavLinks } from "./data";

/**vlv-villages version 1.15 - context js -
 * Features:
 * 
 *   --> Importing and providing 'BookingIcons'.
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
                BookingIcons
            }}>
            {children}
        </VLVillagesContext.Provider>
    )
} 


export const useVLVillagesContext = () => {
    return useContext(VLVillagesContext)
}