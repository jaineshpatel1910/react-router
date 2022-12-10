import React, { useContext, useState } from 'react'
import { createContext } from 'react'
const AuthContent = createContext(null)

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const login = (user) => {
        setUser(user)
    }
    const logout = () => {
        setUser(null)
    }
    return (
        <AuthContent.Provider value={{ user, login, logout }}>
            {children}
        </AuthContent.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContent)
}