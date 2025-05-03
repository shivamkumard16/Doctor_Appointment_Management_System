import { createContext, useEffect } from "react";

export const AppContext = createContext(null);


export const AppContextProvider = ({ children }) => {

    

    return(
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    )
}