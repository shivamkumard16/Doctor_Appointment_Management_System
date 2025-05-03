import { createContext, useEffect, useState } from "react";

export const AdminContext = createContext();


export const AdminContextProvider = ({ children }) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [aToken,setAToken] = useState('');
    const value = {
        aToken,
        setAToken,
        backendUrl 
    }

    useEffect(()=>{
        const adminToken = localStorage.getItem('aToken') || '';
        setAToken(adminToken);  
        console.log("admin token in admin context = ",aToken);
    },[aToken])

    return(
        <AdminContext.Provider value={value}>
            {children}
        </AdminContext.Provider>
    )
}