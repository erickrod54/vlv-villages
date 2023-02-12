import React, { useContext } from "react";
import { Images, mainNavLinks } from "./data";

/**vlv-villages version 1.11 - context js -
 * Features:
 * 
 *   --> Prividing 'mainNavLinks' array.
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
                mainNavLinks
            }}>
            {children}
        </VLVillagesContext.Provider>
    )
} 


export const useVLVillagesContext = () => {
    return useContext(VLVillagesContext)
}