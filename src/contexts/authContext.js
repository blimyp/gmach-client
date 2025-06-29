import React, { createContext, useState, useEffect } from "react";
import { getToken } from "../services/tokenService";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const savedToken = getToken();
        if (savedToken) setToken(savedToken);
    }, []);

    return (
        <AuthContext.Provider value={{ token, setToken }}>
            {children}
        </AuthContext.Provider>
    );
}


