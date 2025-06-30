import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        const savedToken = localStorage.getItem('token');

        if (savedUser && savedToken) {
            setUser(JSON.parse(savedUser));
            setToken(savedToken);
        }
    }, []);

    const loginContext = (userData, token) => {
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('token', token);

        setUser(userData);
        setToken(token);
    };

    const logoutContext = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');

        setUser(null);
        setToken(null);
    };

    return (
        <AuthContext.Provider value={{ user, token, loginContext, logoutContext }}>
            {children}
        </AuthContext.Provider>
    );
}
