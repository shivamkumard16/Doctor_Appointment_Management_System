import { createContext } from "react";

export const DoctorContext = createContext(null);


export const DoctorContextProvider = ({ children }) => {


    return(
        <DoctorContext.Provider value={{}}>
            {children}
        </DoctorContext.Provider>
    )
}