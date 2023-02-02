import React, { useContext } from "react";

/**vlv-villages version 1.05 - context js -
 * Features:
 * 
 *   --> Testing context.
 * 
 * Note: Changes will be done later in this 
 * component
 */

export const VLVillagesContext = React.createContext()

export const VLVillagesProvider = ({ children }) => {

    const message = 'vlv villages context success';

    return(
        <VLVillagesContext.Provider value={{message}}>
            {children}
        </VLVillagesContext.Provider>
    )
} 


export const useVLVillagesContext = () => {
    return useContext(VLVillagesContext)
}