import { createContext, useState } from "react";
import { doctors } from '../assets/assets';

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const currencySymbol = '$';
    const value = {
        doctors,
        loading,
        setLoading,
        currencySymbol
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}
